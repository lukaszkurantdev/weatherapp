import React from 'react';
import './ReportsList.css';
//mobx
import { inject, observer } from 'mobx-react';
import RootStore from '../../stores/RootStore';
//components
import Modal from '../../components/modal/Modal';
import ReportListItem from '../../components/list-items/ReportListItem';
//navigation
import { withRouter } from 'react-router-dom';
//services
import { toJS } from 'mobx';

interface IProps {
  store?: RootStore;
  navigation?: any;
  history: any;
  location: any;
  match: any;
}



@inject('store')
@observer
class ChangePasswordPage extends React.Component<IProps> {
  state = {
    redirectToReferrer: false,
    addModalVisible: false,
    selectedUser: null,
  };
  
  componentDidMount = () => {
    this.props.store?.reportsStore.getReports();
  }

  acceptReport = (id: number) => {
    this.props.store?.reportsStore.acceptReport(id);
  }

  rejectReport = (id: number) => {
    this.props.store?.reportsStore.rejectReport(id);
  }

  render() {
    const reports = toJS(this.props.store?.reportsStore.reportsList) || []
    console.log(reports)
    return (
      <div className="list-container">
          {reports.map(el => (
            <ReportListItem key={el.id} pin={el.pin} onReject={() =>  this.rejectReport(el.id)} onAccept={() =>  this.acceptReport(el.id)} reason={el.reason} />
          ))}
          {!reports.length && (
            <div>
              <h2 className="empty-list-text">No Reports</h2>
            </div>
          )}
        {this.state.addModalVisible && 
          <Modal onPressLeft={() => {}} leftButtonLabel={'Close'} onPressRight={() => {}} rightButtonLabel={'Add redactor'} header={'Add new redactor'} />
        }
      </div>
    );
  }
}

export default withRouter(ChangePasswordPage);
