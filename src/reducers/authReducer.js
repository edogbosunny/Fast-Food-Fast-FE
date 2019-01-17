import isEmpty from '../validation/is-empty';
import { SET_CURRENT_USER, SET_LOADER } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  loading: true,
  user: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADER:
      return {
        ...state,
        loading: !state.loading,
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
        loading: null,
      };
    default:
      return state;
  }
};
