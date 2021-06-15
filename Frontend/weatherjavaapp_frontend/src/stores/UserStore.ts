import { observable, action } from 'mobx';
import { RootStore } from './RootStore';

class UserStore {
  rootStore: RootStore;

  @observable
  token = localStorage.getItem('token') || '';

  @observable //@ts-ignore
  location = localStorage.getItem('location') != null ? JSON.parse(localStorage.getItem('location')) : {longitude: 0, latitude: 0};

  @observable //@ts-ignore
  privileges = localStorage.getItem('privileges') != null ? JSON.parse(localStorage.getItem('privileges')) : [];

  @observable
  registeredPrompt = false;

  @observable
  fetchingRegistration = false;

  @observable
  fetchingLogging = false;

  @observable
  fetchingPasswordChanging = false;

  @observable
  loginError = false;

  @observable
  registrationError = false;

  @observable
  changePasswordError = false;

  @observable
  invalidOldUserPasswordError = false;

  @observable
  userId: number = 0;

  constructor(rootStore: any) {
    this.rootStore = rootStore;
  }

  @action
  hideRegisteredPrompt = () => {
    this.registeredPrompt = false;
  };

  @action
  login = async (data: Object, callback?: () => void) => {
    this.loginError = false;
    this.fetchingLogging = true;
    this.registeredPrompt = false;

    try {
      const rawResponse = await fetch('/authenticate', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const content = await rawResponse.json();

      if(rawResponse.status === 200) {

        this.fetchingLogging = false;
        this.loginError = false;
        localStorage.setItem('token', content.token);
        localStorage.setItem('location', JSON.stringify({
          longitude: content.longitude,
          latitude: content.latitude
        }));
        localStorage.setItem('privileges', JSON.stringify(content.privileges));
        this.token = content.token;
        this.privileges = content.privileges;
        callback && callback();
      } else {
        throw 'Error'
      }
    
    } catch (error) {
      // console.log(error);
      this.loginError = true;
      this.fetchingLogging = false;
    }
  };

  @action
  register = async (
    data: Object,
    callback?: () => void,
    onError?: (error: any) => void
  ) => {
    this.registrationError = false;
    this.fetchingRegistration = true;

    try {
      const rawResponse = await fetch('/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const content = await rawResponse.json();
      console.log(content)
      if(rawResponse.status === 200) {

        this.fetchingRegistration = false;
        this.registrationError = false;
        this.registeredPrompt = true;
        callback && callback();
      } else {
        throw content;
      }

    } catch (error) {
      onError && onError(error);
      this.registrationError = true;
      this.fetchingRegistration = false;
    }
  };

  @action
  changePassword = async (
    data: Object,
    callback?: () => void,
    onInvalidOldPassword?: () => void
  ) => {
    this.changePasswordError = false;
    this.fetchingPasswordChanging = true;

    try {
      const rawResponse = await fetch('/change-password', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
        body: JSON.stringify(data),
      });

      if (rawResponse.status === 401) {
        this.rootStore.userStore.logout();
        setTimeout(() => {
          window.location.reload();
        }, 100);
        return;
      }


      const content = await rawResponse.json();
      console.log(content)

      if(rawResponse.status === 500) {
        if(content.message === "Old password not match") {
          onInvalidOldPassword && onInvalidOldPassword();
        } else {
          this.changePasswordError = true
        }
        this.fetchingPasswordChanging = false;
      } else {
        this.fetchingPasswordChanging = false;
        this.changePasswordError = false;
        callback && callback();
      }
    } catch (error) {
      console.log(error);
      this.changePasswordError = true;
      this.fetchingPasswordChanging = false;
    }
  };

  @action
  changeLocation = async (data: Object, callback?: () => void) => {
    try {
      const rawResponse = await fetch('/location', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify(data),
      });
      const content = await rawResponse.json();
      //@ts-ignore

      console.log(content)

      if(rawResponse.status === 200) {
        this.location = data;
        localStorage.setItem('location', JSON.stringify(data));
  
        callback && callback();
      }
    
    } catch (error) {
    }
  };

  @action
  logout = (callback?: () => void) => {
    callback && callback();

    setTimeout(() => {
      localStorage.clear();
      this.token = '';
    }, 100);
  };
}

export default UserStore;
