import * as types from '../types';

const CartReducer = (state, action) => {
  switch (action.type) {
    case types.NUM_ITEMS_CART:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export default CartReducer;
