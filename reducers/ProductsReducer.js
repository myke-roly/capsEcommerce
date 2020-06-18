import {
  LIST_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  REMOVE_ALL_CART,
  INCREMENT_PRODUCT,
  DECREMENT_PRODUCT,
  SHOW_MODAL,
  HIDDEN_MODAL,
  GET_TOTAL_PRICE,
} from '../types';

const ProductsReducer = (state, action) => {
  switch (action.type) {
    case LIST_PRODUCTS:
      return { ...state, loading: false, products: action.payload };
    case ADD_TO_CART:
      return {
        ...state,
        cartProducts: action.payload,
        modal: true,
      }
    case HIDDEN_MODAL:
      return {
        ...state,
        modal: false
      }
    default:
      return state;
  }
};

export default ProductsReducer;
