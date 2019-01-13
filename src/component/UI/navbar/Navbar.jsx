/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prefer-stateless-function */


import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logoutUser } from '../../../actions/authActions';

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    const { auth } = this.props;
    const { isAuthenticated } = auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to='' onClick={this.onLogoutClick.bind(this)} className="nav-link">
          Logout
          </Link>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to="/register" className="nav-link">
          Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link to="login" className="nav-link">
          Login
          </Link>
        </li>
      </ul>
    );

    return (
      <Fragment>
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
              { isAuthenticated ? authLinks : guestLinks }
            </div>
          </div>
        </nav>
      </Fragment>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Navbar);
