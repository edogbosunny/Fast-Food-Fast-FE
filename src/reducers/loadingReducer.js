
import { SET_LOADER } from '../actions/types';

const initialState = {
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADER:
      return {
        ...state,
        loading: !state.loading,
      };
    default:
      return state;
  }
};
