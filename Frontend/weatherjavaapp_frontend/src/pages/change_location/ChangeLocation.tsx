import React from 'react';
import './ChangeLocation.css';
//mobx
import { inject, observer } from 'mobx-react';
import RootStore from '../../stores/RootStore';
//navigation
import { withRouter } from 'react-router-dom';
import { MapContainer, TileLayer, Marker} from 'react-leaflet';

interface IProps {
  store?: RootStore;
  navigation?: any;
  history: any;
  location: any;
  match: any;
}

@inject('store')
@observer
class ChangeLocationPage extends React.Component<IProps> {
  markerRef = React.createRef<any>();

  state = {
    position: {
      lat: 51.505,
      lng: -0.09,
    }
  }

  eventHandlers = {
    dragend: () => {
      const marker = this.markerRef.current
      if (marker != null) {
        console.log(marker.getLatLng())
        this.setState({position: marker.getLatLng()})
      }
    },
  };

  onSave = () => {
    this.props.store?.userStore.changeLocation({
      latitude: this.state.position.lat,
      longitude: this.state.position.lng
    }, this.onSaveSuccess);
  }
  
  onSaveSuccess = () => {
    this.props.history.push('/stormmap');
  }

  render() {
    return (
      <div className="main-default-container">
        <div className="change-localization-form">
          <h2>Set localization</h2>
          <p>Drop marker on your localization</p>
          <div className="map-container-location">
              <MapContainer center={[51.505, -0.09]} zoom={8} scrollWheelZoom={true} style={{height: '100%', width: '100%'}}>
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                  position={[this.state.position.lat, this.state.position.lng]}
                  draggable
                  ref={this.markerRef}
                  eventHandlers={this.eventHandlers}
                />
              </MapContainer>
          </div>

          
          <input
            className="button localization-button"
            type="submit"
            value="Save"
            onClick={this.onSave}
          />
        </div>    
      </div>
    );
  }
}

export default withRouter(ChangeLocationPage);
