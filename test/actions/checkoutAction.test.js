/* eslint-disable no-unused-expressions */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { checkoutOrder } from '../../src/actions/checkoutAction';
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
        response: 'succesfully ordered',
      });

      const expected = [
        {
          type: 'CHECKOUT_ORDER',
          payload: 'succesfully ordered',
        }];
      store.dispatch(checkoutOrder(mockData.loginDetails)).then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    });
  });
});
