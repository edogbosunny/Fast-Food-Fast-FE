/* eslint-disable no-unused-expressions */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { loginUser, registerUser, logoutUser } from '../../src/actions/authActions';

import mockData from '../../src/__mocks__/mockData';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore({});

window.localStorage = localStorage;
// console.log('localstorage=====>>>>>>>', window);
describe('Authentication suit', () => {
  beforeEach(() => {
    moxios.install();
    // store.clearActions();
  });
  afterEach(() => moxios.uninstall());
  describe('lAuthentication Action', () => {
    it('should login an existing user', () => {
      // const store = mockStore({});
      moxios.wait(() => {
        const req = moxios.requests.mostRecent();
        req.respondWith({
          token: 'kdkdkdd',
          message: 'user logged in successfully',
        });
      });

      // moxios.stubRequest('https://fast-food-fast-app.herokuapp.com/api/v1/auth/login', {
      //   status: 200,
      //   response: {
      //     token: 'kdkdkdd',
      //     message: 'user logged in successfully',
      //   },
      // });

      const expected = [];
      console.log('store===>>>', store.getActions());
      store.dispatch(loginUser(mockData.loginDetails)).then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    xit('should register a new user', () => {
      moxios.stubRequest('https://fast-food-fast-app.herokuapp.com/api/v1/auth/signup', {
        status: 200,
        response: 'user registered successfully',
      });
      const expected = [
        {
          type: 'SET_CURRENT_USER',
          payload: 'user logged in successfully',
        }];
      store.dispatch(registerUser(mockData.registerDetails)).then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    xit('return error when registering a user', () => {
      moxios.stubRequest('https://fast-food-fast-app.herokuapp.com/api/v1/auth/signup', {
        status: 401,
        response: 'user registered unsuccessfully',
      });
      const expected = [
        {
          type: 'GET_ERRORS',
          payload: 'user not registered successfully',
        }];
      store.dispatch(registerUser(mockData.errRegisterDetails)).then(() => {
        expect(store.getActions()).not.toEqual(expected);
      });
    });

    xit('logout a user', (done) => {
      store.dispatch(logoutUser());
      expect(store.getActions()).toBeCalled;
      done();
    });
  });
});
