/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import { GET_ERRORS, SET_CURRENT_USER } from './types';

export const setCurrentUser = decoded => ({
  type: SET_CURRENT_USER,
  payload: decoded,
});

export const loginUser = userData => (dispatch) => {
  axios.post('https://fast-food-fast-app.herokuapp.com/api/v1/auth/login', userData)
    .then((res) => {
      const { token } = res.data.data;
      window.localStorage.setItem('jwtToken', token);
      setAuthToken(token);
      const decoded = jwtDecode(token);
      dispatch(setCurrentUser(decoded));
    })
    .catch(({ response: { data: { data } } }) => dispatch({
      type: GET_ERRORS,
      payload: data.message ? data : data.error,
    }));
};

export const logoutUser = () => (dispatch) => {
  window.localStorage.removeItem('jwtToken');
  setAuthToken(false);
  dispatch(setCurrentUser({}));
};
