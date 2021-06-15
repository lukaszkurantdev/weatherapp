import { observable, action } from 'mobx';
import { Lightning } from '../types/Lightning.model';
import { Pin } from '../types/Pin.model';
import { RootStore } from './RootStore';

class ReportsStore {
  rootStore: RootStore;

  @observable
  fetchingAddingPin = false;

  @observable
  fetchingPinsList = false;

  @observable
  pins: Pin[] = [];

  @observable
  lightnings: Lightning[] = [];

  constructor(rootStore: any) {
    this.rootStore = rootStore;
  }

  @action
  addPin = async (data: Object, callback?: () => void) => {
    this.fetchingAddingPin = true;

    try {
      const rawResponse = await fetch('/pins', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify(data),
      });
      const content = await rawResponse.json();

      this.fetchingAddingPin = false;
      callback && callback();
    } catch (error) {
      this.fetchingAddingPin = true;
    }
  };

  @action
  editPin = async (data: Object, callback?: () => void) => {
    this.fetchingAddingPin = true;
    console.log(data,'data')
    try {
      await fetch('/pins', {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify(data),
      });

      this.fetchingAddingPin = false;
      callback && callback();
    } catch (error) {
      this.fetchingAddingPin = true;
    }
  };

  @action
  getPins = async (callback?: () => void) => {
    this.fetchingPinsList = true;

    try {
      const rawResponse = await fetch('/pins', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token')
        },
      });
      console.log(rawResponse.status)
      if (rawResponse.status === 401) {
        this.rootStore.userStore.logout();
        setTimeout(() => {
          window.location.reload();
        }, 100);
        return;
      }

      const content = await rawResponse.json();

      console.log(content)

      this.pins = content;
      this.fetchingPinsList = false;
      callback && callback();
    } catch (error) {
      this.fetchingPinsList = true;
    }
  };

  @action
  getLightnings = async (callback?: () => void) => {
    try {
      const rawResponse = await fetch('/lightnings', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token')
        },
      });

      if(rawResponse.status === 200) {
        const content = await rawResponse.json();
        console.log(content)
        this.lightnings = content.lightnings;
        callback && callback();
      }
     
     
    } catch (error) {
      
    }
  };

  @action
  removePin = async (id: number, callback?: () => void) => {
    try {
      const rawResponse = await fetch(`/pins/`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify({id}),
      });
      console.log(rawResponse)
      if(rawResponse.status === 200) {
        this.getPins();
        this.getLightnings();
      }
     
    } catch (error) {
      
    }
  }

  @action
  reportPin = async (pinId: number, reason: string, callback?: () => void) => {
    try {
      const rawResponse = await fetch(`/reports/`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify({pinId, reason}),
      });
      console.log('rawResponse',JSON.stringify({pinId, reason}))
      if(rawResponse.status === 200) {
        callback?.();
      }
     
    } catch (error) {
      console.log('error',error)

    }
  }

  @action
  likePin = async (pinId: number, callback?: () => void) => {
    try {
      const rawResponse = await fetch(`/review/`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify({pinId, value: 1}),
      });
      if(rawResponse.status === 200) {
        this.getPins();
        this.getLightnings();
      }
     
    } catch (error) {
    }
  }

  @action
  unlikePin = async (pinId: number, callback?: () => void) => {
    try {
      const rawResponse = await fetch(`/review/`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify({pinId}),
      });
      if(rawResponse.status === 200) {
        this.getPins();
        this.getLightnings();
      }
     
    } catch (error) {
    }
  }
}

export default ReportsStore;
