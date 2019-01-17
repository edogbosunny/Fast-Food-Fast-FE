/* eslint-disable import/prefer-default-export */
import { ADD_TO_CART } from './types';

export const addToCart = (menu) => {
  let cartItems = JSON.parse(window.localStorage.getItem('cart'));

  if (!cartItems) {
    const newMenu = menu;
    newMenu.qty = 1;
    cartItems = { [newMenu.meal_id]: newMenu };
    window.localStorage.setItem('cart', JSON.stringify(cartItems));

    return { type: ADD_TO_CART, payload: cartItems };
  }

  if (cartItems[menu.meal_id]) {
    const newMenu = menu;
    newMenu.qty += 1;
    cartItems[newMenu.meal_id] = newMenu;
    window.localStorage.setItem('cart', JSON.stringify(cartItems));

    return { type: ADD_TO_CART, payload: cartItems };
  }
  const newMenu = menu;
  newMenu.qty = 1;
  cartItems[newMenu.meal_id] = newMenu;
  window.localStorage.setItem('cart', JSON.stringify(cartItems));

  return { type: ADD_TO_CART, payload: cartItems };
};
