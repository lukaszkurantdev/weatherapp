import React from 'react';
import './ChangePassword.css';
//mobx
import { inject, observer } from 'mobx-react';
import RootStore from '../../stores/RootStore';
//components
import Input from '../../components/Input';
//navigation
import { withRouter } from 'react-router-dom';
//services
import TranslationService from '../../services/TranslationService';

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
  oldPasswordInputRef = React.createRef<Input>();
  newPasswordInputRef = React.createRef<Input>();
  confirmNewPasswordInputRef = React.createRef<Input>();

  state = {
    redirectToReferrer: false,
  };

  navigateAfterAction = () => {
    this.props.history.push('/stormmap');
  };

  onInvaildOldPassword = () => {
    const oldPasswordInput = this.oldPasswordInputRef.current;
    if (oldPasswordInput) {
      oldPasswordInput.setValidity(true, 'Incorrect user password.');
    }
  };

  changePassword = (event: any) => {
    event.preventDefault();
    const oldPasswordInput = this.oldPasswordInputRef.current;
    const newPasswordInputRef = this.newPasswordInputRef.current;
    const confirmNewPasswordInput = this.confirmNewPasswordInputRef.current;

    if (oldPasswordInput && newPasswordInputRef && confirmNewPasswordInput) {
      const emailValidation = oldPasswordInput.validate();
      const passwordValidation = newPasswordInputRef.validate();
      const confirmPasswordValidation = confirmNewPasswordInput.validate();

      if (emailValidation && passwordValidation && confirmPasswordValidation) {
        const oldPassword = oldPasswordInput.getValue();
        const newPassword = newPasswordInputRef.getValue();
        const confirm_new_password = confirmNewPasswordInput.getValue();

        if (newPassword !== confirm_new_password) {
          newPasswordInputRef.setValidity(true, 'Hasła nie są takie same.');
          confirmNewPasswordInput.setValidity(true);
          return;
        }

        const data = {
          oldPassword,
          newPassword,
        };

        this.props.store?.userStore.changePassword(
          data,
          this.navigateAfterAction,
          this.onInvaildOldPassword
        );
      }
    }
  };

  render() {
    return (
      <div className="main-default-container">
        <form className="change-password-form" onSubmit={this.changePassword}>
          <h2>{TranslationService.change_password}</h2>
          <label>{TranslationService.old_password}</label>
          <Input ref={this.oldPasswordInputRef} type="password" />
          <label>{TranslationService.new_password}</label>
          <Input ref={this.newPasswordInputRef} type="password" />
          <label>{TranslationService.confirm_new_password}</label>
          <Input ref={this.confirmNewPasswordInputRef} type="password" />
          <input
            className="button"
            type="submit"
            value={TranslationService.change_password}
          />
        </form>
      </div>
    );
  }
}

export default withRouter(ChangePasswordPage);
