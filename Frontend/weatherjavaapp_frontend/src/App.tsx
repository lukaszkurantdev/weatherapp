import React from 'react';
import './App.css';
//navigation
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
//mobx
import { Provider } from 'mobx-react';
import Store from './stores/RootStore';
//components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
//pages
import LoginPage from './pages/login/Login';
import RegisterPage from './pages/register/Register';
import StormMap from './pages/stormmap/StormMap';
import ChangePassword from './pages/change_password/ChangePassword';
import AddReport from './pages/addpin/AddPin';
import ChangeLocation from './pages/change_location/ChangeLocation';
import EditPin from './pages/editpin/EditPin'
import RedactorsList from './pages/redactors/RedactorsList';
import ReportsList from './pages/reports/ReportsList';

let store = new Store();

const PrivateRoute = ({
  component,
  ...rest
}: {
  component: any;
  path: string;
}) => {
  const Component = component;
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem('token') !== null &&
        localStorage.getItem('token') !== '' ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <PrivateRoute path="/stormmap" component={StormMap} />
            <PrivateRoute path="/change_password" component={ChangePassword} />
            <PrivateRoute path="/addreport" component={AddReport} />
            <PrivateRoute path="/change_location" component={ChangeLocation} />
            <PrivateRoute path="/pin/:id" component={EditPin} />
            <PrivateRoute path="/redactors" component={RedactorsList} />
            <PrivateRoute path="/reports" component={ReportsList} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/login" component={LoginPage} />
            <PrivateRoute path="/" component={StormMap} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
