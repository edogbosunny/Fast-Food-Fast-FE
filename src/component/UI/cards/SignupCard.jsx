/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import '../../../styles/style.css';
import TextFieldGroup from '../textField/TextFieldGroup.jsx';
import { registerUser } from '../../../actions/authActions';
import Spinner from '../../../utils/Spinner';

class SignupCard extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      firstname: '',
      lastname: '',
      confirmpassword: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    if (this.props.auth.isAuthenticated) {
      // console.log(this.props);
      // eslint-disable-next-line react/destructuring-assignment
      this.props.history.push('/');
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const {
      firstname, lastname, email, password, confirmpassword,
    } = this.state;
    const newUser = {
      firstname,
      lastname,
      email,
      password,
      confirmpassword,
    };
    const { registerUser, history } = this.props;
    registerUser(newUser, history);
    // console.log('newuser==>', newUser);
  }

  render() {
    const {
      firstname, lastname, confirmpassword, email, password,
    } = this.state;
    const { errors, loader } = this.props;
    const { loading } = loader;
    if (loading) {
      return (<Spinner />);
    }
    return (
      <div className='Aligner '>
        <div className='loginCard '>
          <div className='aligncnt '>
            <h2 className='mt'>Create Account </h2>
            {/* <!-- <h4 style="margin-top:-25px; color:#f2f2f2 ">
        Get your food in minutes</h4> --> */}
            <form noValidate onSubmit={this.onSubmit}>
              <div className='divwidth '>
                <div>
                  <TextFieldGroup
                    placeholder='First Name'
                    name='firstname'
                    value={firstname}
                    type='firstName'
                    error={errors.firstname || ''}
                    onChange={this.onChange}
                    minLength='5'
                  />

                  <TextFieldGroup
                    placeholder='Last Name'
                    name='lastname'
                    type='lastname'
                    error={errors.lastname || ''}
                    value={lastname}
                    onChange={this.onChange}
                  />

                  <TextFieldGroup
                    placeholder='email'
                    name='email'
                    type='email'
                    error={errors.email || ''}
                    value={email}
                    onChange={this.onChange}
                  />

                  <TextFieldGroup
                    placeholder='Password'
                    name='password'
                    type='password'
                    error={errors.password || ''}
                    value={password}
                    onChange={this.onChange}
                  />

                  <TextFieldGroup
                    placeholder='Confirm Password'
                    name='confirmpassword'
                    type='confirmpassword'
                    error={errors.confirmpassword || ''}
                    value={confirmpassword}
                    onChange={this.onChange}
                  />

                  <small>{errors.message}</small>
                </div>
                <div>
                  <input
                    type='submit'
                    className=' submitbtn btn btn-info btn-block mt-4'
                  />
                </div>
              </div>

              <div className='bm' />
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
  loader: state.loader,
});

export default withRouter(connect(mapStateToProps, { registerUser })(SignupCard));
