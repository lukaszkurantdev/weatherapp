import React from 'react';
import './RedactorsList.css';
//mobx
import { inject, observer } from 'mobx-react';
import RootStore from '../../stores/RootStore';
//components
import Modal from '../../components/modal/Modal';
import UserListItem from '../../components/list-items/UserListItem';
import Select from 'react-select';
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
    this.props.store?.redactorStore.getRedactors();
    this.props.store?.redactorStore.getAllUsers();
  }

  showAddModal = () => {
    this.setState({addModalVisible: true});
  }

  hideAddModal = () => {
    this.setState({addModalVisible: false, selectedUser: null});
  }

  addRedactors = () => {
    const id = this.state.selectedUser
    if(id) {
      this.props.store?.redactorStore.addRedactor(id, this.hideAddModal);
    }
  }

  removeRedactor = (userId: number) => {
    this.props.store?.redactorStore.removeRedactor(userId);
  }

  render() {
    const options = toJS(this.props.store?.redactorStore.usersSelectedOptions);
    const redactors = toJS(this.props.store?.redactorStore.redactorsList) || []
    return (
      <div className="list-container">
        <input
            className="button add-redactor-button"
            type="submit"
            onClick={this.showAddModal}
            value={'Add new redactor'}
          />
          {redactors.map(el => (
            <UserListItem key={el.id} name={el.username} onRemove={() =>  this.removeRedactor(el.id)} />
          ))}
          {!redactors.length && (
            <div>
              <h2 className="empty-list-text">No Redactors</h2>
            </div>
          )}
        {this.state.addModalVisible && 
          <Modal onPressLeft={this.hideAddModal} leftButtonLabel={'Close'} onPressRight={this.addRedactors} rightButtonLabel={'Add redactor'} header={'Add new redactor'}>
            <Select onChange={(value) => this.setState({selectedUser: value !== null ? parseInt(value.value, 10): null})} options={options} />
          </Modal>
        }
      </div>
    );
  }
}

export default withRouter(ChangePasswordPage);
