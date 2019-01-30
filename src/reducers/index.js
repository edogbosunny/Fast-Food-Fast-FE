import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import foodMenuReducer from './foodMenuReducer';
import loadingReducer from './loadingReducer';
import cartReducer from './cartReducer';
import checkoutOrderReducer from './checkoutOrderReducer';
import orderHistoryReducer from './orderHistoryReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  foodMenu: foodMenuReducer,
  loader: loadingReducer,
  cart: cartReducer,
  order: checkoutOrderReducer,
  orderHistory: orderHistoryReducer,
});
