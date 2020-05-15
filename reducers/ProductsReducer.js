import { LIST_PRODUCTS } from '../types';

const ProductsReducer = (state, action) => {
  switch (action.type) {
    case LIST_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export default ProductsReducer;