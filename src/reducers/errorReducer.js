import { GET_ERRORS } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  user: {},
};

export default (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case GET_ERRORS:
      return (payload.email
              || payload.password) ? payload : { ...initialState, message: payload.message };
    default:
      return state;
  }
};
