import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import Navbar from '../component/UI/navbar/Navbar.jsx';
import Footer from '../component/UI/footer/Footer.jsx';
import Landing from '../component/Pages/Landing.jsx';
import Login from '../component/Pages/Login.jsx';
import store from '../store';

const routes = () => (
  <Provider store={store}>
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Landing} />
      </Switch>
      <Switch>
        <Route exact path='/login' component={Login} />
      </Switch>
      <Footer />
    </div>
  </Provider>
);


export default routes;
