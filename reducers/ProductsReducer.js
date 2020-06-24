import {
  LIST_PRODUCTS,
  LIST_CART_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  REMOVE_ALL_CART,
  INCREMENT_PRODUCT,
  DECREMENT_PRODUCT,
  HIDDEN_MODAL,
  SUBTOTAL_PRICE,
  GET_ITEMS,
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
        cartProduct: [],
        detailCartProducts: JSON.parse(sessionStorage.getItem('cartItems')),
        modal: false,
        subTotalPrice: action.price,
        totalPrice: action.price
      };
    case ADD_TO_CART:
      sessionStorage.setItem('cartItems', JSON.stringify(action.meta));
      return {
        ...state,
        modal: true,
        cartProduct: action.payload,
        itemsCart: action.items
      };
    case GET_ITEMS:
      return {
        ...state,
        itemsCart: action.meta
      }
    case REMOVE_FROM_CART:
    sessionStorage.setItem('cartItems', JSON.stringify(action.meta));
    let price = 0;
    state.cartProducts.map(product => product._id !== action.payload ? price = product.price : null)
     return {
       ...state,
       cartProducts: state.cartProducts.filter(product => product._id !== action.payload),
       itemsCart: action.items,
       subTotalPrice: state.subTotalPrice - price,
       totalPrice: state.totalPrice - price,
     }
    case REMOVE_ALL_CART:
    sessionStorage.setItem('cartItems', JSON.stringify([]));
    return {
      ...state,
      totalPrice: 0,
      subTotalPrice: 0,
      desc: 0,
      itemsCart: 0,
      cartProducts: []
    }
    case HIDDEN_MODAL:
      return {
        ...state,
        modal: false,
      };
    case INCREMENT_PRODUCT:
      sessionStorage.setItem('cartItems', JSON.stringify(action.payload));
      return {
        ...state,
        detailCartProducts: action.payload,
        subTotalPrice: action.price,
        totalPrice: action.price
      };
      case DECREMENT_PRODUCT:
      sessionStorage.setItem('cartItems', JSON.stringify(action.payload));
      return {
        ...state,
        detailCartProducts: action.payload,
        subTotalPrice: action.price,
        totalPrice: action.price
      };
    case APLY_DESC:
      return {
        ...state,
        desc: state.subTotalPrice * action.meta,
        totalPrice: state.subTotalPrice - (state.subTotalPrice * action.meta)
      };
    default:
      return state;
  }
};

export default ProductsReducer;
