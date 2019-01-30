// import isEmpty from '../validation/is-empty';
import { GET_FOOD_MENU } from '../actions/types';

const initialState = {
  foodMenu: { data: [] },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FOOD_MENU: {
      // console.log('payload====--->', action);
      return {
        ...state,
        foodMenu: action.payload,
      };
    }
    default:
      return state;
  }
};
