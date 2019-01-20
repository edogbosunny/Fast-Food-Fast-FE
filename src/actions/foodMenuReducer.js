/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  SET_CURRENT_USER, GET_FOOD_MENU,
} from './types';
import { setLoader } from './loaderActions';

export const setCurrentUser = decoded => ({
  type: SET_CURRENT_USER,
  payload: decoded,
});


export const getAllMenu = () => (dispatch) => {
  dispatch(setLoader());
  axios
    .get('https://fast-food-fast-app.herokuapp.com/api/v1/menu')
    .then((res) => {
      console.log('axios=> get menu', res);
      dispatch({
        type: GET_FOOD_MENU,
        payload: res.data,
      });
      dispatch(setLoader());
    })
    .catch(err => console.log(err));
};
