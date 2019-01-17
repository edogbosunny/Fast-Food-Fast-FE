import { GET_ERRORS } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: null,
};

export default (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case GET_ERRORS: {
      console.log(action.payload);
      return (
        payload.email
        || payload.password
        || payload.firstname
        || payload.confirmpassword
      || payload.lastname) ? payload : { ...initialState, message: payload.message };
    }

    default:
      return state;
  }
};
