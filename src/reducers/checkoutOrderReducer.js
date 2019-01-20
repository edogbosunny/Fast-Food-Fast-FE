/* eslint-disable no-case-declarations */
import { CHECKOUT_ORDER } from '../actions/types';

// const cart = JSON.parse(window.localStorage.getItem('cart')) || {};


const initialState = {
  order: {},
};
export default (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_ORDER:
      return {
        ...state,
        order: action.payload,
      };
    default:
      return state;
  }
};
