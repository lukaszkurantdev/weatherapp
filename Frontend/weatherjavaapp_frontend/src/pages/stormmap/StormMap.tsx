import React from 'react';
import './StormMap.css';
//mobx
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';
import RootStore from '../../stores/RootStore';
//navigation
import { withRouter, Link } from 'react-router-dom';
//components\
import { IoIosAdd, IoIosRefresh, IoIosCreate, IoIosTrash, IoIosWarning, IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';
import { MapContainer, TileLayer, Marker, Popup, LayerGroup, Circle, SVGOverlay } from 'react-leaflet'
import moment from 'moment';
import Modal from '../../components/modal/Modal';
import TextArea from '../../components/TextArea';

interface IProps {
  store?: RootStore;
  navigation?: any;
  history: any;
  location: any;
  match: any;
}

@inject('store')
@observer
class SimulationsListPage extends React.Component<IProps> {
  textAreaRef = React.createRef<TextArea>();

  state = {
    redirectToReferrer: false,
    reportedPinId: null,
    successModalVisible: false
  };

  componentDidMount = () => {
    this.refresh();
  }

  refresh = () => {
    this.props.store?.pinsStore.getPins();
    this.props.store?.pinsStore.getLightnings();
  }

  removePin = (id: number) => {
    this.props.store?.pinsStore.removePin(id);
  }

  showReportModal = (reportedPinId: number) => {
    this.setState({reportedPinId})
  }

  hideReportModal = () => {
    this.setState({reportedPinId: null})
  }

  showSuccessModal = () => {
    this.setState({successModalVisible: true});
  }

  hideSuccessModal = () => {
    this.setState({successModalVisible: false});
  }

  reportPin = () => {
    const id = this.state.reportedPinId;
    if(this.textAreaRef.current?.validate() && id) {
      const reason = this.textAreaRef.current?.getValue();
      this.props.store?.pinsStore.reportPin(id, reason || "", () => {this.hideReportModal(); this.showSuccessModal()} );
    }
  }

  likePress = (id: number, isLiked: boolean) => {
    if(isLiked) {
      this.props.store?.pinsStore.unlikePin(id);
    } else {
      this.props.store?.pinsStore.likePin(id);
    }
  }


  render() {
    //@ts-ignore
    const location = toJS(this.props.store?.userStore.location);
    const pins = toJS(this.props.store?.pinsStore.pins);
    const lightnings = toJS(this.props.store?.pinsStore.lightnings);

    return (
      <>
      <div className="main-default-container">
        <div className="header-container">
          <h2>Users pins map</h2>
          <div className="buttons-container">
            <div
              className="round-button round-button-secondary refresh-button"
              onClick={this.refresh}
            >
              <IoIosRefresh />
            </div>
            <div className="round-button round-button-primary">
              <IoIosAdd />
              <Link to="/addreport">
                <p>Add pin</p>
              </Link>
            </div>
          </div>
        </div>
        </div>
       
          <div className="map-container">
            <MapContainer center={location?.latitude ? [location.latitude, location.longitude] : [0,0]} zoom={8} scrollWheelZoom={true} style={{height: '100%', width: '100%'}}>
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {lightnings?.map((lightning, index) => (
                <SVGOverlay bounds={[
                  [lightning.latitude, lightning.longitude],
                  [lightning.latitude + 0.5, lightning.longitude + 0.5],
                ]}>
                  <circle r="5" cx="10" cy="10" fill={lightning.color} />
                </SVGOverlay>
              ))}
             
             {pins?.map((report, index) => (
                <Marker position={[report.pin.latitude, report.pin.longitude]} key={index}>
                  <Popup>
                    {report.pin.image && <img className="popup-image" src={'data:image/png;name=15_2.png;base64,'+report.pin.image} alt=""/>}
                    <h4 className="popup-title">{report.pin.title}</h4>
                    <p className="popup-description" >{report.pin.description}</p>
                    <p className="popup-credits">Added by: {report.pin.user} at {moment(report.pin.date).format("DD.MM.YYYY HH:mm")}</p>

                    
                      <div className='icons'>
                        {report.createdByUser ? 
                          <>
                            <IoIosCreate onClick={() => this.props.history.push(`/pin/${report.pin.id}`)} style={{height: 20, width: 20}} />
                            <IoIosTrash onClick={() => this.removePin(report.pin.id)} style={{height: 20, width: 20}}/>
                            <IoMdHeart style={{height: 20, width: 20}} />
                            <b>{report.pin.reviewsNumber}</b>
                          </>
                        :
                         <>
                         <IoIosWarning onClick={() => this.showReportModal(report.pin.id)} style={{height: 20, width: 20}} />
                          {report.reviewedByUser ?
                            <IoMdHeart onClick={() => this.likePress(report.pin.id, true)} style={{height: 20, width: 20}} />
                            : <IoMdHeartEmpty onClick={() => this.likePress(report.pin.id, false)} style={{height: 20, width: 20}} />
                          }
                          <b>{report.pin.reviewsNumber}</b>
                         </>      
                        }
                      </div>
                   

                  </Popup>
                </Marker>
              ))}

              {this.state.reportedPinId !== null && 
                <Modal header={'Report Pin'} onPressLeft={this.hideReportModal} leftButtonLabel={'Close'} onPressRight={this.reportPin} rightButtonLabel={'Send Report'}>
                  <TextArea ref={this.textAreaRef} style={{borderColor: '#aaa'}} />
                </Modal>
              }
              {this.state.successModalVisible &&
                <Modal text={"Your report has been send!"}  header={'Report Pin'}  onPressLeft={this.hideSuccessModal} leftButtonLabel={'OK'} />
              }
            </MapContainer>
          </div>
       
     
      </>
    );
  }
}

export default withRouter(SimulationsListPage);
