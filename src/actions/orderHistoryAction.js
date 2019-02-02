/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { GET_ORDER_HISTORY } from './types';

const token = window.localStorage.getItem('jwtToken');

export const getAllOrders = orderData => async (dispatch) => {
  const res = await axios({
    method: 'get',
    url: 'https://fast-food-fast-app.herokuapp.com/api/v1/orders',
    data: orderData,
    headers: { 'x-access-token': token },
  });
  // console.log(res);
  dispatch({
    type: GET_ORDER_HISTORY,
    payload: res.data,
  });
};
