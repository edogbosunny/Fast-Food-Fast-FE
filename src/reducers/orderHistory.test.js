import orderHistoryReducer from './orderHistoryReducer';
import mock from '../__mocks__/reducerMock/orderHistoryMock';

describe('Test orderHistory reducer', () => {
  it('return all order once GET_ORDER_HISTORY is dispatched', () => {
    const initialState = {
      loading: true,
      orderHistory: {
        message: '',
        count: 0,
        data: [],
      },
    };

    const state = orderHistoryReducer(initialState,
      {
        type: 'GET_ORDER_HISTORY',
        payload: mock.orderHistory,
      });
    expect(state).toEqual({
      loading: false,
      orderHistory: [],
    });
  });
});
