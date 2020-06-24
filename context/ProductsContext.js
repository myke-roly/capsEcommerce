import { createContext, useReducer, useState, useRef, useCallback } from 'react';
import ProductsReducer from '../reducers/ProductsReducer';
import { axiosFetch } from '../API/axios';
import { useFetchById } from '../hooks/useFetchById';
import {
  LIST_PRODUCTS,
  LIST_CART_PRODUCTS,
  ADD_TO_CART,
  GET_ITEMS,
  REMOVE_FROM_CART,
  REMOVE_ALL_CART,
  INCREMENT_PRODUCT,
  DECREMENT_PRODUCT,
  HIDDEN_MODAL,
  SUBTOTAL_PRICE,
  GET_TOTAL_PRICE,
  APLY_DESC,
  QUANTITY_PRODUCT
} from '../types';
import { filter } from 'compression';

export const ContextProducts = createContext();
const ProductsContext = ({ children }) => {
  let initialState = {
    products: [],
    loading: true,
    itemsCart: [],
    cartProducts: [],
    cartProduct: {},
    detailCartProducts: [],
    modal: false,
    codeDesc: 'THEEND2020', //25% DESC
    subTotalPrice: 0,
    desc: 0,
    totalPrice: 0,
  };

  const [state, dispatch] = useReducer(ProductsReducer, initialState);

  const getProducts = async () => {
    try {
      const response = await axiosFetch.get('/api/productos');
      const { products } = response.data;

      dispatch({ 
        type: LIST_PRODUCTS,
        payload: products
       });
    } catch (error) {
      console.error(error);
    }
  };

  const getCartProducts = async () => {
    try {
      const response = await axiosFetch.get('/api/productos');
      const { products } = response.data;
      const dataStorage = sessionStorage.getItem('cartItems');
      const { filterProducts } = useFetchById(products, dataStorage);

      let subtotalPrice = 0;
      if(JSON.parse(dataStorage).length !== 0) {
        JSON.parse(dataStorage).map(product => subtotalPrice = subtotalPrice + product.totalPriceProduct)
      }      dispatch({ 
        type: LIST_CART_PRODUCTS,
        payload: filterProducts,
        price: subtotalPrice
       });
    } catch (error) {
      console.error(error);
    }
  }

  const addToCart = async (id, quantity, color, price, totalPriceProduct) => {
    if(!sessionStorage.getItem('cartItems')) sessionStorage.setItem('cartItems', JSON.stringify([]));
    let alredyExist = false;
    // si el producto ya existe en el carrito no agregar
    JSON.parse(sessionStorage.getItem('cartItems')).map(i => i.id === id ? alredyExist = true : false );
    if(alredyExist) return;
    
    let updateIds = [];
    const response = await axiosFetch.get('/api/producto/'+id);
    const { product } = response.data;
    
    const itemStorage = JSON.parse(sessionStorage.getItem('cartItems')).filter(i => i.id !== id);
    updateIds.push(...updateIds, ...itemStorage,  {id, quantity, color, price, totalPriceProduct})
    
    const items = JSON.parse(sessionStorage.getItem('cartItems')).length;
    // agregar producto al carrito
    dispatch({
      type: ADD_TO_CART,
      items: items + 1,
      payload: product,
      meta: updateIds,
    })
  }

  const getTotalItemsCart = () => {
    const items = sessionStorage.getItem('cartItems') ? JSON.parse(sessionStorage.getItem('cartItems')).length : 0;

    dispatch({
      type: GET_ITEMS,
      meta: items
    })
  };

  const removeFromCart = (id) => {
    let updateIds = [];
    let subtotalPrice = 0;
    
    const itemStorage = JSON.parse(sessionStorage.getItem('cartItems')).filter(i => i.id !== id);
    updateIds.push(...updateIds, ...itemStorage);

    const items = JSON.parse(sessionStorage.getItem('cartItems')).length;

    updateIds.map(product => subtotalPrice = subtotalPrice + product.totalPriceProduct);
    
    dispatch({
      type: REMOVE_FROM_CART,
      items: items - 1,
      payload : id,
      meta: updateIds,
      price: subtotalPrice
    })
  }

  const removeAllCart = () => {
    dispatch({type: REMOVE_ALL_CART})
  }

  const closeModal = () => {
    dispatch({type: HIDDEN_MODAL});
  }

  // quantityProduct
const incrementQuantityProduct = (id) => {
  let updateQuantity = [];
  let subtotalPrice = 0;

  const itemStorage = JSON.parse(sessionStorage.getItem('cartItems')).filter(item => {
    if(item.id === id) {
       item.quantity += 1;
       item.totalPriceProduct = item.price * item.quantity;
    }
    
    return item;
  });
  updateQuantity.push(...updateQuantity, ...itemStorage);
  // SUMAR EL TOTAL DE LOS PRODUCTOS
  updateQuantity.map(product => subtotalPrice = subtotalPrice + product.totalPriceProduct);

  dispatch({
    type: INCREMENT_PRODUCT, 
    payload: updateQuantity,
    price: subtotalPrice
  });
}

const decrementQuantityProduct = (id) => {
  let updateQuantity = [];
  let subtotalPrice = 0;

  const itemStorage = JSON.parse(sessionStorage.getItem('cartItems')).filter(item => {
    if(item.id === id && item.quantity >1) {
       item.quantity -= 1;
       item.totalPriceProduct = item.price * item.quantity;
    }
    
    return item;
  });
  updateQuantity.push(...updateQuantity, ...itemStorage);
  // SUMAR EL TOTAL DE LOS PRODUCTOS
  updateQuantity.map(product => subtotalPrice = subtotalPrice + product.totalPriceProduct);

  dispatch({
    type: DECREMENT_PRODUCT, 
    payload: updateQuantity,
    price: subtotalPrice
  });
}

const aplyDesc = (code) => {
  if(code === state.codeDesc) {
    dispatch({ 
      type: APLY_DESC,
      meta: 0.25, //25%
    })
  }
}

function showQuantity(id) {
  let quantity;

  const detailCartProducts = JSON.parse(sessionStorage.getItem('cartItems'));

  detailCartProducts.map(item => item.id === id ? quantity = item.quantity : 1);

  return quantity;
}

  return (
    <ContextProducts.Provider
      value={{
        loading: state.loading,
        products: state.products,
        cartProducts: state.cartProducts,
        cartProduct: state.cartProduct,
        itemsCart: state.itemsCart,
        modal: state.modal,
        detailCartProducts: state.detailCartProducts,
        subTotalPrice: state.subTotalPrice,
        totalPrice: state.totalPrice,
        codeDesc: state.codeDesc,
        desc: state.desc,
        getProducts,
        getCartProducts,
        closeModal,
        addToCart,
        getTotalItemsCart,
        removeFromCart,
        removeAllCart,
        incrementQuantityProduct,
        decrementQuantityProduct,
        aplyDesc,
        showQuantity,
      }}
    >
      {children}
    </ContextProducts.Provider>
  );
};
export default ProductsContext;
