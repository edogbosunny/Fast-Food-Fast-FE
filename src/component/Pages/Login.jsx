/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
// import { connect } from 'react-redux';
import LoginCard from '../UI/cards/LoginCard.jsx';
import '../../styles/style.css';

class Login extends Component {
  render() {
    return (
      <div className='bg'>
        <LoginCard />
      </div>
    );
  }
}

export default Login;
