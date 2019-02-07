import { GET_ORDER_HISTORY, SET_LOADER, DEL_ORDER_HISTORY } from '../actions/types';

const initialState = {
  loading: true,
  orderHistory: {
    message: '',
    count: 0,
    mealItem: [],
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
    case DEL_ORDER_HISTORY:
      // console.log('orderHistory--->', action);
      return {
        ...state,
        orderHistory: {
          ...state.orderHistory,
          mealItem: state.orderHistory.mealItem.filter(item => item.order_id !== action.payload),
        },
        // orderHistory: action.payload.data,
        loading: !state.loading,
      };
    default:
      return state;
  }
};
