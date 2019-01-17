/* eslint-disable no-case-declarations */
import { ADD_TO_CART } from '../actions/types';

const initialState = {
  items: null,
  count: 0,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const allCartItems = action.payload;
      const total = Object.keys(allCartItems).map((menuId) => {
        const menu = allCartItems[menuId];
        console.log(menu);
        return parseInt(menu.price, 10) * menu.qty;
      }).reduce((curr, prev) => curr + prev, 0);
      console.log(total);
      return { ...state, cart: action.payload, count: total };
    default:
      return state;
  }
};
