import UserStore from './UserStore';
import PinsStore from './PinsStore';
import RedactorStore from './RedactorsStore';
import ReportsStore from './ReportsStore';
export class RootStore {
  userStore: UserStore;
  pinsStore: PinsStore;
  redactorStore: RedactorStore;
  reportsStore: ReportsStore;

  constructor() {
    this.userStore = new UserStore(this);
    this.pinsStore = new PinsStore(this);
    this.redactorStore = new RedactorStore(this);
    this.reportsStore = new ReportsStore(this);
  }
  
}

export default RootStore;
