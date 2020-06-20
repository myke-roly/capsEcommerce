import {
  LIST_PRODUCTS,
  LIST_CART_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  REMOVE_ALL_CART,
  INCREMENT_PRODUCT,
  DECREMENT_PRODUCT,
  HIDDEN_MODAL,
  GET_TOTAL_PRICE,
  APLY_DESC,
} from '../types';

const ProductsReducer = (state, action) => {
  switch (action.type) {
    case LIST_PRODUCTS:
      return { ...state, loading: false, products: action.payload };
    case LIST_CART_PRODUCTS:
      return {
        ...state,
        loading: false,
        cartProducts: action.payload,
        modal: false
      };
    case ADD_TO_CART:
      sessionStorage.setItem('cartItems', JSON.stringify(action.meta));
      return {
        ...state,
        modal: true,
        // ids: action.meta,
        cartProduct: action.payload
      };
    case HIDDEN_MODAL:
      return {
        ...state,
        modal: false,
      };
    case INCREMENT_PRODUCT:
      return {
        ...state,
        quantityProduct: state.quantityProduct + 1,
      };
    case APLY_DESC:
      return {
        ...state,
        desc: state.subTotalPrice * action.meta,
        totalPrice: action.payload,
      };
    default:
      return state;
  }
};

export default ProductsReducer;
