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
  history: {
    action: 'PUSH',
    push: jest.fn(),
  },
  location: {
    hash: '',
    pathname: '/login',
    search: '',
  },
  logoutUser: jest.fn(),
  match: { path: '/login', url: '/login', isExact: true },
};

export const mockState = {
  auth: {
    isAuthenticated: true,
    loading: null,
    user: { id: 1, iat: 1549439277, exp: 1549525677 },
  },
};
