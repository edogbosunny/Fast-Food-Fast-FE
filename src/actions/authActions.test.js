import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import { registerUser } from './authActions';
import { data } from '../__mocks__/reducerMock/authMock';
import mockLocalStorage from '../__mocks__/mockLocalStorage';

window.localStorage = mockLocalStorage;

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

describe('Auth action test', () => {
  mockLocalStorage.setItem('jwtToken', data.data.token);
  const setAuthToken = jest.fn();
  setAuthToken(data.data.token);
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('should register new user', () => {
    const expectedResult = [
      {
        data,
        type: 'SET_CURRENT_USER',
      },
    ];
    moxios.stubRequest('http:localhost:3000/api/v1/auth/login', {
      status: 200,
      response: {
        data,
      },
    });
    store.dispatch(registerUser()).then(() => {
      expect(store.getActions()).toEqual(expectedResult);
    });
  });
});
