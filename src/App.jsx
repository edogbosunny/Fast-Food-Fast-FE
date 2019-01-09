import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './component/UI/navbar/Navbar.jsx';
import Footer from './component/UI/footer/Footer.jsx';
import Landing from './component/Pages/Landing.jsx';
import Login from './component/Pages/Login.jsx';
// import 'react-bootstrap';

// import './styles/global.scss';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <Router>
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
      </Router>
    );
  }
}

export default App;
