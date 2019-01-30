import { addToCart, removeFromCart } from '../../src/actions/cartActions';


describe('cart actions', () => {
  it('should add to cart', () => {
    const menu = { meal_id: 2, price: '200', meal: 'DODO' };
    const action = addToCart(menu);

    expect(action.type).toEqual('ADD_TO_CART');
  });
});
