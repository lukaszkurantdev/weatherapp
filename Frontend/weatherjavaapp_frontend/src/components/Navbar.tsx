import React from 'react';
import Dropdown from './dropdown/Dropdown';
import { inject, observer } from 'mobx-react';
import RootStore from '../stores/RootStore';
import { Link } from 'react-router-dom';

interface IProps {
  store?: RootStore;
}

@inject('store')
@observer
class Navbar extends React.Component<IProps> {
  render() {
    if (
      this.props.store?.userStore.token === '' &&
      localStorage.getItem('token') === null
    ) {
      return null;
    }

    return (
      <div className="top-bar">
        <div className="app-main-logo">
          <Link to="/">
            <h3>
              <span>Weather</span> Web App
            </h3>
          </Link>
        </div>
        <Dropdown />
      </div>
    );
  }
}

export default Navbar;
