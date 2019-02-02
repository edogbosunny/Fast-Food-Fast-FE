/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { CHECKOUT_ORDER } from './types';

const token = window.localStorage.getItem('jwtToken');

export const checkoutOrder = orderData => async (dispatch) => {
  try {
    const res = await axios({
      method: 'post',
      url: 'https://fast-food-fast-app.herokuapp.com/api/v1/orders',
      data: orderData,
      headers: { 'x-access-token': token },
    });
    dispatch({
      type: CHECKOUT_ORDER,
      payload: res.data,
    });
    return null;
  } catch (err) {
    return console.log(err);
  }
};
