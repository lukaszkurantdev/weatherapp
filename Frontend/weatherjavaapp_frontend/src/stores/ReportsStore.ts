import { observable, action} from 'mobx';
import { RootStore } from './RootStore';

class ReportsStore {
    rootStore: RootStore;

    @observable
    reportsList: any[] = [];

    constructor(rootStore: any) {
        this.rootStore = rootStore;
    }

    @action
    getReports = async () => {
      try {
        const rawResponse = await fetch('/reports', {
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
    
        this.reportsList = content;
      } catch (error) {
      }
    }

    @action
    rejectReport = async (reportId: number, callback?: () => void) => {
        try {
            const rawResponse = await fetch('/reject_report', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token')
              },
              body: JSON.stringify({reportId}),
            });
    
            if (rawResponse.status === 200) {
              this.getReports();
              callback?.();
            }
          } catch (error) {
          }
    }

    @action
    acceptReport = async (reportId: number, callback?: () => void) => {
      try {
          const rawResponse = await fetch('/accept_report', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify({reportId}),
          });
  
          if (rawResponse.status === 200) {
            this.getReports();
            callback?.();
          }
        } catch (error) {
          this.getReports();
          callback?.();
        }
  }
}

export default ReportsStore;