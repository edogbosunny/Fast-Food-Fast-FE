/* eslint-disable react/no-unused-state */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../../../styles/style.css';
import '../../../styles/global.scss';
import { loginUser } from '../../../actions/authActions';
import TextFieldGroup from '../textField/TextFieldGroup.jsx';

class LoginCard extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    if (this.props.auth.isAuthenticated) {
      // eslint-disable-next-line react/destructuring-assignment
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    const { history } = this.props;
    // eslint-disable-next-line react/prop-types
    if (nextProps.auth.isAuthenticated) {
      history.push('/');
    }

    // if (nextProps.errors) {
    //   this.setState({ errors: nextProps.errors });
    // }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    const { loginUser } = this.props;
    e.preventDefault();
    const { email, password } = this.state;
    const userData = { email, password };
    // console.log(userData);
    loginUser(userData);
  }

  render() {
    const { email, password } = this.state;
    const { errors } = this.props;
    return (
      <div className="Aligner ">
        <div className="loginCard ">
          <div className="aligncnt ">
            <h2 className="mt">Login To Your Account </h2>
            { /* <!-- <h4 style="margin-top:-25px; color:#f2f2f2 ">
      Get your food in minutes</h4> --> */}
            <form noValidate onSubmit={this.onSubmit}>
              <div className="divwidth ">
                <div>
                  <TextFieldGroup
                    placeholder='Email Address'
                    name='email'
                    value={email}
                    error={errors.email || ''}
                    onChange={this.onChange}
                    minLength='5'
                  />

                  <TextFieldGroup
                    placeholder='Password'
                    name='password'
                    type='password'
                    error={errors.password || ''}
                    value={password}
                    onChange={this.onChange}
                  />
                  <small>
                    {errors.message}
                  </small>
                </div>
                <div>
                  <input type="submit" className=" submitbtn btn btn-info btn-block mt-4" />
                </div>
              </div>

              <div className="bm" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});

export default withRouter(connect(mapStateToProps, { loginUser })(LoginCard));
