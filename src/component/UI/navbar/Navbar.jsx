/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import '../../styles/ind.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark nav-dark mb-4">
        <div className="container">
          <Link to='/' className='logo navbar-brand' />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto nav-tabs">
              <li className="nav-item">
                <Link to='/' className="nav-link  m-auto">
                  {' '}
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link to='/about' className="nav-link m-auto">
                  {' '}
                  About
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto nav-tabs">
              <li className="nav-item">
                <a className="nav-link" href="register.html">
                  Sign Up
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="login.html">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
