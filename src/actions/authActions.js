/* eslint-disable func-names */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import {
  GET_ERRORS, SET_CURRENT_USER,
} from './types';
import { setLoader } from './loaderActions';

export const setCurrentUser = decoded => ({
  type: SET_CURRENT_USER,
  payload: decoded,
});

// eslint-disable-next-line import/prefer-default-export
export const registerUser = userData => (dispatch) => {
  dispatch(setLoader());
  return axios
    .post('https://fast-food-fast-app.herokuapp.com/api/v1/auth/signup', userData)
    // eslint-disable-next-line no-unused-vars
    .then((res) => {
      const { token } = res.data.data;
      window.localStorage.setItem('jwtToken', token);
      setAuthToken(token);
      const decoded = jwtDecode(token);
      dispatch(setCurrentUser(decoded));
      dispatch(setLoader());
    })
    // .catch(err => console.log(err.response.data.data.errors.email))
    .catch(({ response: { data: { data } } }) => {
      dispatch(setLoader());
      dispatch({
        type: GET_ERRORS,
        payload: data.message ? data : data.errors,
      });
    });
};

export const loginUser = userData => dispatch => axios.post('https://fast-food-fast-app.herokuapp.com/api/v1/auth/login', userData)
  .then((res) => {
    const { token } = res.data.data;
    // console.log('token===>>>', token);
    // console.log('window==>>>'. window)
    window.localStorage.setItem('jwtToken', token);
    setAuthToken(token);
    const decoded = jwtDecode(token);
    dispatch(setCurrentUser(decoded));
  })
  .catch(({ response: { data: { data } } }) => dispatch({
    type: GET_ERRORS,
    payload: data.message ? data : data.error,
  }));

export function logoutUser() {
  return function (dispatch) {
    window.localStorage.removeItem('jwtToken');
    setAuthToken(false);
    return dispatch(setCurrentUser({}));
  };
}
