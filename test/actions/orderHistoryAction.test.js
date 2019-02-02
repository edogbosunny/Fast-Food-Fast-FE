/* eslint-disable no-unused-expressions */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { getAllOrders } from '../../src/actions/orderHistoryAction';
import mockData from '../../src/__mocks__/mockData';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore({});

describe('Authentication suit', () => {
  beforeEach(() => {
    moxios.install();
    store.clearActions();
  });
  afterEach(() => moxios.uninstall());
  describe('checkout order', () => {
    it('checkout an order', () => {
      moxios.stubRequest('https://fast-food-fast-app.herokuapp.com/api/v1/orders', {
        status: 200,
        response: 'orders',
      });

      const expected = [
        {
          type: 'GET_ORDER_HISTORY',
          payload: 'orders',
        }];
      store.dispatch(getAllOrders(mockData.loginDetails)).then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    });
  });
});
