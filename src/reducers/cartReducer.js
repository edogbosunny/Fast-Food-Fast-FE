/* eslint-disable no-case-declarations */
import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/types';

const cart = JSON.parse(window.localStorage.getItem('cart')) || {};
const count = JSON.parse(window.localStorage.getItem('count')) || 0;


const initialState = {
  items: null,
  count,
  cart,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const allCartItems = action.payload;
      const total = Object.keys(allCartItems).map((menuId) => {
        const menu = allCartItems[menuId];
        // console.log(menu);
        return parseInt(menu.price, 10) * menu.qty;
      }).reduce((curr, prev) => curr + prev, 0);
      console.log(total);
      window.localStorage.setItem('count', total);
      return {
        ...state,
        cart: action.payload,
        count: total,
      };

    case REMOVE_FROM_CART:
      const newCart = action.payload;
      const updatedTotal = Object.keys(newCart).map((menuId) => {
        const menu = newCart[menuId];
        // console.log(menu);
        return parseInt(menu.price, 10) * menu.qty;
      }).reduce((curr, prev) => curr + prev, 0);
      console.log(updatedTotal);
      window.localStorage.setItem('count', updatedTotal);
      return {
        ...state,
        cart: action.payload,
        count: updatedTotal,
      };
    default:
      return state;
  }
};
