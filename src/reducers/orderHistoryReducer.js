import { GET_ORDER_HISTORY, SET_LOADER } from '../actions/types';

const initialState = {
  loading: true,
  orderHistory: {
    message: '',
    count: 0,
    data: [],
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADER:
      return {
        ...state,
        loading: !state.loading,
      };
    case GET_ORDER_HISTORY:
      // console.log('orderHistory--->', action);
      return {
        ...state,
        orderHistory: action.payload.data,
        loading: !state.loading,
      };
    default:
      return state;
  }
};
