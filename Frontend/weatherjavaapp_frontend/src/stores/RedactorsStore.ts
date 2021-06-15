import { observable, action, computed} from 'mobx';
import { RootStore } from './RootStore';

class RedactorStore {
    rootStore: RootStore;

    @observable
    redactorsList: any[] = [];

    @observable
    usersList: any[] = [];

    @observable
    fetchingRedactorsList = false;

    constructor(rootStore: any) {
        this.rootStore = rootStore;
    }

    @action
    getAllUsers = async () => {
      try {
        const rawResponse = await fetch('/all_users_list', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
          },
        });

        if (rawResponse.status === 401) {
          this.rootStore.userStore.logout();
          setTimeout(() => {
            window.location.reload();
          }, 100);
          return;
        }
  
        const content = await rawResponse.json();
  
        this.usersList = content;
      } catch (error) {
      }
    }

    @action
    getRedactors = async (callback?: () => void) => {
        this.fetchingRedactorsList = true;

        try {
          const rawResponse = await fetch('/all_redactors_list', {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + localStorage.getItem('token')
            },
          });

          if (rawResponse.status === 401) {
            this.rootStore.userStore.logout();
            setTimeout(() => {
              window.location.reload();
            }, 100);
            return;
          }
    
          const content = await rawResponse.json();
        
          this.redactorsList = content;
          this.fetchingRedactorsList = false;
          callback?.();
        } catch (error) {
          this.fetchingRedactorsList = true;
        }
    }

    @action
    addRedactor = async (userId: number, callback?: () => void) => {
      try {
        const rawResponse = await fetch('/redactor_role', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
          },
          body: JSON.stringify({userId}),
        });

        if(rawResponse.status === 200) {
          this.getRedactors();
        }
      } catch (error) {
        
      } finally {
        callback?.();
      }
    }

    @action
    removeRedactor = async (userId: number, callback?: () => void) => {
      console.log(userId)
      try {
        const rawResponse = await fetch('/redactor_role', {
          method: 'DELETE',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
          },
          body: JSON.stringify({userId}),
        });

        if(rawResponse.status === 200) {
          this.getRedactors();
        }
      } catch (error) {
        console.log(error.response)
      } finally {
        callback?.();
      }
    }

    @computed
    get usersSelectedOptions() {
      return this.usersList.map(user => ({
        value: `${user.id}`,
        label: user.username,
      }))
    }
}

export default RedactorStore;