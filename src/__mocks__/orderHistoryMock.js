/* eslint-disable import/prefer-default-export */
export const props = {
  dispatch: jest.fn(),
  orderHistory: {
    loading: false,
    orderHistory: {
      count: 30,
      data: [{}],
      message: 'Food order retrieved succesfully',
    },
  },
};

export const tableProps = {
  getAllOrders: jest.fn(),
  orderHistory: {
    loading: false,
    orderHistory: {
      count: 30,
      data: [{}],
      message: 'Food order retrieved succesfully',
    },
  },
};
