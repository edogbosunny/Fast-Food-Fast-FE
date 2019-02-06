import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import jwtDecode from 'jwt-decode';

import { setCurrentUser, logoutUser } from '../actions/authActions';
import Navbar from '../component/UI/navbar/Navbar.jsx';
import Footer from '../component/UI/footer/Footer.jsx';
import Landing from '../component/Pages/Landing.jsx';
import Login from '../component/Pages/Login.jsx';
import Signup from '../component/Pages/SignupPage.jsx';
import OrderHistory from '../component/Pages/OrderHistory.jsx';
import store from '../store';
import setAuthToken from '../utils/setAuthToken';

// check for token i local storage
if (window.localStorage.jwtToken) {
  setAuthToken(window.localStorage.jwtToken);
  const decoded = jwtDecode(window.localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
  // check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    // store.dispatch(clearCurrentProfile());
    window.location.href = '/login';
  }
}

export const routes = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Landing} />
        </Switch>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/order-history' component={OrderHistory} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>
);


export default routes;
