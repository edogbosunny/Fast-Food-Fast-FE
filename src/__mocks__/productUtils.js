/* eslint-disable import/prefer-default-export */
export const props = {
  addToCart: jest.fn(),
  auth: {
    isAuthenticated: true,
    loading: false,
    user: { id: 1, iat: 1549456186, exp: 1549542586 },
  },
  foodMenu: {
    foodMenu: {
      count: 3,
      data: [
        { meal_id: 1, price: '600', meal: 'Spaniish Noodles' },
        { meal_id: 2, price: '200', meal: 'DODO' },
        { meal_id: 3, price: '500', meal: 'Ewagoin' },
      ],
      message: 'Food menu has been retrieved succesfully',
    },
  },
  getAllMenu: jest.fn(),
  history: {
    push: jest.fn(),
  },
  alert: {
    show: jest.fn(),
    error: jest.fn(),
    success: jest.fn(),
  },
  loader: { loading: false },
  mealQuantity: undefined,
  staticContext: undefined,
};
