import React, { Component } from 'react';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import Routes from './routes/routes';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (

      <Router>
        <Routes />
      </Router>

    );
  }
}

export default withRouter(App);
