/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { GET_ORDER_HISTORY, DEL_ORDER_HISTORY } from './types';

const token = window.localStorage.getItem('jwtToken');
const id = window.localStorage.getItem('userId');

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


export const getUserOrderById = orderData => async (dispatch) => {
  console.log('i  don show');
  const res = await axios({
    method: 'get',
    url: `https://fast-food-fast-app.herokuapp.com/api/v1/users/${parseInt(id, 10)}/orders`,
    data: orderData,
    headers: { 'x-access-token': token },
  });
  console.log(res);
  dispatch({
    type: GET_ORDER_HISTORY,
    payload: res.data,
  });
};

export const deleteOrder = orderData => async (dispatch) => {
  console.log('i  don show');
  const res = await axios({
    method: 'delete',
    url: `https://fast-food-fast-app.herokuapp.com/api/v1/orders/${parseInt(orderData, 10)}`,
    data: orderData,
    headers: { 'x-access-token': token },
  });
  console.log(res);
  dispatch({
    type: DEL_ORDER_HISTORY,
    payload: orderData,
  });
};
