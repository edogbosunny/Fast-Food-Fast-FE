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
  loginUser: jest.fn(),
  match: { path: '/login', url: '/login', isExact: true },
};

export const mockedLoginState = {
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
};

export const nextProps = {
  auth: {
    isAuthenticated: true,
    loading: null,
    user: { id: 1, iat: 1549439277, exp: 1549525677 },
  },
  history: {
    action: 'PUSH',
    push: jest.fn(),
  },
};

export const Loginstate = {
  email: '',
  password: '',
};
