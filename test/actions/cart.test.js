/* eslint-disable no-underscore-dangle */
/* eslint-disable no-multi-assign */
import { addToCart, removeFromCart } from '../../src/actions/cartActions';


describe('cart actions', () => {
  const menu = { meal_id: 2, price: '200', meal: 'DODO' };
  it('should add to cart', () => {
    const action = addToCart(menu);
    // localStorage.clear();
    expect(action.type).toEqual('ADD_TO_CART');
  });

  it('should add 1 to quantity if exist in local storage', () => {
    const KEY = '2';
    const VALUE = JSON.stringify({
      meal_id: 2, price: '200', meal: 'DODO', qty: 1,
    });
    localStorage.setItem(KEY, VALUE);
    const newQty = JSON.parse(localStorage.__STORE__[KEY]).qty += 1;
    const newValue = ({
      meal_id: 2, price: '200', meal: 'DODO', qty: newQty,
    });
    // console.log(newValue);
    const action = addToCart(newValue);
    expect(action.type).toEqual('ADD_TO_CART');
    localStorage.setItem(KEY, JSON.stringify(newValue));
    // console.log(localStorage.__STORE__);
  });

  it('should remove from cart', () => {
    const action = removeFromCart(menu);
    // localStorage.clear();
    expect(action.type).toEqual('REMOVE_FROM_CART');
  });
});
