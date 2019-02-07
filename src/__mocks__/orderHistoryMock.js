/* eslint-disable import/prefer-default-export */
export const props = {
  dispatch: jest.fn(),
  orderHistory: {
    loading: false,
    orderHistory: {
      count: 30,
      mealItem: [{}],
      message: 'Food order retrieved succesfully',
    },
    getAllOrders: jest.fn(),
    getUserOrderById: jest.fn(),
  },
};

export const tableProps = {
  getAllOrders: jest.fn(),
  getUserOrderById: jest.fn(),
  orderHistory: {
    loading: false,
    orderHistory: {
      count: 30,
      data: [{}],
      message: 'Food order retrieved succesfully',
    },
  },
};
