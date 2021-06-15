import React from 'react';
//mobx
import {inject, observer} from 'mobx-react';
import RootStore from '../stores/RootStore';

interface IProps {
  store?: RootStore;
}

@inject('store')
@observer
class Navbar extends React.Component<IProps> {
  render() {
    if(
      this.props.store?.userStore.token === '' &&
      localStorage.getItem('token') === null
    ) {
      return null;
    }

    return (
      <footer>
        <p>Weather Web App. Łukasz Kurant / Piotr Małek / Łukasz Lipiński 2021</p>
      </footer>
    );
  }
}

export default Navbar;