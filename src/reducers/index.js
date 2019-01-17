import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import foodMenuReducer from './foodMenuReducer';
import loadingReducer from './loadingReducer';
import cartReducer from './cartReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  foodMenu: foodMenuReducer,
  loader: loadingReducer,
  cart: cartReducer,
});
