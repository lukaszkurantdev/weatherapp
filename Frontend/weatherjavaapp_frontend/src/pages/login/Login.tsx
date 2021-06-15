import React from 'react';
import './Login.css';
//mobx
import { inject, observer } from 'mobx-react';
import RootStore from '../../stores/RootStore';
//components
import Input from '../../components/Input';
//navigation
import { withRouter, Link } from 'react-router-dom';
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
class LoginPage extends React.Component<IProps> {
  emailInputRef = React.createRef<Input>();
  passwordInputRef = React.createRef<Input>();

  navigateAfterLogin = () => {
    this.props.history.push('/simulations');
  };

  login = async (event: any) => {
    event.preventDefault();

    const emailInput = this.emailInputRef.current;
    const passwordInput = this.passwordInputRef.current;

    if (emailInput && passwordInput) {
      const emailValidation = emailInput.validate();
      const passwordValidation = passwordInput.validate();

      if (emailValidation && passwordValidation) {
        const username = emailInput.getValue();
        const password = passwordInput.getValue();

        const data = {
          username,
          password,
        };

        this.props.store?.userStore.login(data, this.navigateAfterLogin);
      }
    }
  };

  render() {
    const loginError = this.props.store?.userStore.loginError;
    const { registeredPrompt } = this.props.store?.userStore!;
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

          <form onSubmit={this.login}>
            <p className="title">{TranslationService.log_into}</p>
            {registeredPrompt && (
              <p className="label-danger">{TranslationService.registered}</p>
            )}

            {loginError && (
              <p className="label-danger">
                {TranslationService.invalid_cridentials}
              </p>
            )}

            <label>{TranslationService.email_address}</label>
            <Input ref={this.emailInputRef} type="elementName" />
            <label>{TranslationService.password}</label>
            <Input ref={this.passwordInputRef} type="password" />
            <input
              className="button"
              type="submit"
              value={TranslationService.log_in}
            />
            <p>
              {TranslationService.not_have_accout}
              <Link to="/register">
                <span>{TranslationService.sign_up}</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginPage);
