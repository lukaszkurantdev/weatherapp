import React from 'react';
import './Register.css';
//components
import Input from '../../components/Input';
//navigation
import { withRouter, Link } from 'react-router-dom';
//mobx
import { inject, observer } from 'mobx-react';
import RootStore from '../../stores/RootStore';
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
class RegisterPage extends React.Component<IProps> {
  emailInputRef = React.createRef<Input>();
  passwordInputRef = React.createRef<Input>();
  confirmPasswordInputRef = React.createRef<Input>();

  navigateAfterRegister = () => {
    this.props.history.push('/login');
  };

  register = async (event: any) => {
    event.preventDefault();

    const emailInput = this.emailInputRef.current;
    const passwordInput = this.passwordInputRef.current;
    const confirmPasswordInput = this.confirmPasswordInputRef.current;

    if (emailInput && passwordInput && confirmPasswordInput) {
      const emailValidation = emailInput.validate();
      const passwordValidation = passwordInput.validate();
      const confirmPasswordValidation = confirmPasswordInput.validate();

      if (emailValidation && passwordValidation && confirmPasswordValidation) {
        const username = emailInput.getValue();
        const password = passwordInput.getValue();
        const confirmPassword = confirmPasswordInput.getValue();

        if (password !== confirmPassword) {
          passwordInput.setValidity(
            true,
            TranslationService.passwords_not_the_same
          );
          confirmPasswordInput.setValidity(true);
          return;
        }

        const data = {
          username,
          password,
        };

        this.props.store?.userStore.register(
          data,
          this.navigateAfterRegister,
          this.onErrorCallback
        );
      }
    }
  };

  onErrorCallback = (error: any) => {
    console.log(error);

    if (
      error?.message === 'User exist'
    ) {
      this.emailInputRef.current?.setValidity(
        true,
        TranslationService.email_used
      );
    }
  };

  render() {
    return (
      <div className="main-container">
        <div className="form-center-container">
          <div className="logo-main-container">
            <div className="logo-center-container"></div>
            <div className="app-header">
              <h3>
                <span>Weather</span> Web App
              </h3>
            </div>
          </div>

          <form onSubmit={this.register}>
            <p className="title">{TranslationService.sign_up}</p>

            <label>{TranslationService.email_address}</label>
            <Input ref={this.emailInputRef} type="elementName" />

            <label>{TranslationService.password}</label>
            <Input ref={this.passwordInputRef} type="password" />

            <label>{TranslationService.confirm_password}</label>
            <Input ref={this.confirmPasswordInputRef} type="password" />

            <input
              className="button"
              type="submit"
              value={TranslationService.sign_up}
            />

            <p>
              {TranslationService.have_account}
              <Link to="/login">
                <span>{TranslationService.sign_in}</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(RegisterPage);
