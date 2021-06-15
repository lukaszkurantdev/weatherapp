import React from 'react';
import { Redirect, Link } from 'react-router-dom';
//styles
import './Dropdown.css';
//mobx
import { IoIosPerson } from 'react-icons/io';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';
import RootStore from '../../stores/RootStore';
interface IProps {
  store?: RootStore;
}

@inject('store')
@observer
class Dropdown extends React.Component<IProps> {
  state = {
    displayMenu: false,
    redirectToReferrer: false,
  };

  showDropdownMenu = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  };

  hideDropdownMenu = () => {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });
  };

  logout = () => {
    this.props.store?.userStore.logout(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    if (this.state.redirectToReferrer) {
      return <Redirect to="/login" />;
    }

    const privileges: string[] = toJS(this.props.store?.userStore.privileges)
    const isAdmin = privileges.includes('MODERATE_REDACTORS_PRIVILEGE');
    const isRedactor = privileges.includes('MODERATE_PINES_PRIVILEGES');
    return (
      <div className="dropdown">
        <div className="drop-button" onClick={this.showDropdownMenu}>
          <IoIosPerson />
        </div>

        {this.state.displayMenu && (
          <ul>
             <Link to="/change_location">
              <li>Change location</li>
            </Link>
            <Link to="/change_password">
              <li>Change password</li>
            </Link>
            {isRedactor &&
              <Link to="/reports">
                <li>Reports list</li>
              </Link>
            }
            {isAdmin &&
              <Link to="/redactors">
                <li>Redactors list</li>
              </Link>
            }
            <li onClick={this.logout}>Logout</li>
          </ul>
        )}
      </div>
    );
  }
}

export default Dropdown;
