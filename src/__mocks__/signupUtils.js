/* eslint-disable import/prefer-default-export */
export const props = {
  auth: {
    isAuthenticated: true,
    loading: null,
    user: { id: 1, iat: 1549439277, exp: 1549525677 },
  },
  errors: {
    isAuthenticated: false,
    loading: null,
    email: '',
    password: '',
    message: '',
  },
  loader: {
    loading: false,
  },
  user: {},
  history: {
    action: 'PUSH',
    push: jest.fn(),
  },
  location: {
    hash: '',
    pathname: '/login',
    search: '',
  },
  registerUser: jest.fn(),
};

export const mockedSignupState = {
  auth: {
    isAuthenticated: true,
    loading: null,
    user: { id: 1, iat: 1549439277, exp: 1549525677 },
  },
  errors: {
    isAuthenticated: false,
    loading: null,
    email: '',
    password: '',
    message: '',
  },

  loader: {
    loading: false,
  },
};
