/* eslint-disable import/prefer-default-export */
export const props = {
  cart: {
    count: 800,
    cart: {
      0: {
        meal_id: 1, price: '600', meal: 'Spaniish Noodles', qty: 1,
      },
    },
    items: null,
    cartCount: 800,
  },
  checkoutOrder: jest.fn(),
  order: {
    order: {},
  },
  history: {
    push: jest.fn(),
  },
  removeFromCart: jest.fn(),
};
