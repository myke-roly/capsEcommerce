import { createContext, useReducer, useState, useRef } from 'react';
import ProductsReducer from '../reducers/ProductsReducer';
import { axiosFetch } from '../API/axios';
import { useFetchById } from '../hooks/useFetchById';
import {
  LIST_PRODUCTS,
  LIST_CART_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  REMOVE_ALL_CART,
  INCREMENT_PRODUCT,
  DECREMENT_PRODUCT,
  SHOW_MODAL,
  HIDDEN_MODAL,
  GET_TOTAL_PRICE,
  APLY_DESC
} from '../types';

export const ContextProducts = createContext();
const ProductsContext = ({ children }) => {
  let initialState = {
    products: [],
    loading: true,
    itemscart: 0,
    cartProducts: [],
    cartProduct: {},
    ids: [],
    quantityProduct: 1,
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
      console.log(error);
    }
  };

  const getCartProducts = async () => {
    try {
      const response = await axiosFetch.get('/api/productos');
      const { products } = response.data;
      const { filterProducts } = useFetchById(products, sessionStorage.getItem('cartItems'))
      
      dispatch({ 
        type: LIST_CART_PRODUCTS,
        payload: filterProducts
       });
    } catch (error) {
      console.error(error);
    }
  } 

  const addToCart = async (id) => {    
    let alredyExist = false;
    JSON.parse(sessionStorage.getItem('cartItems')).map(i => i.id === id ? alredyExist = true : false );
    // si el producto ya existe en el carrito no agregar
    if(alredyExist) return;
    
    let updateIds = []; 
    const response = await axiosFetch.get('/api/producto/'+id);
    const { product } = response.data;
    
    const itemStorage = JSON.parse(sessionStorage.getItem('cartItems')).filter(i => i.id !== id);
    updateIds.push(...updateIds, ...itemStorage,  {id})
    // agregar producto al carrito
    dispatch({
      type: ADD_TO_CART,
      payload: product,
      meta: updateIds
    })
  }

  const removeFromCart = (id) => {
    console.log('remove from cart', id)
    
  }

  const removeAllCart = () => {
    console.log('eliminar todos los elementos del carrito')
  }

  const closeModal = () => {
    console.log('ocultar modal')
    dispatch({
      type: HIDDEN_MODAL
    })
  }

  // quantityProduct
const incrementQuantityProduct = () => {
  console.log('agragar uno');
  dispatch({type: INCREMENT_PRODUCT });
}

const decrementQuantityProduct = () => {
  console.log('quitar uno');
  // no se puede tene menos de 1
}

const aplyDesc = (code) => {
  console.log('aplicar descuento');
  if(code === state.codeDesc) {
    console.log(`Con este codigo ${code} usted tiene un descuento de 25%`);
    dispatch({ 
      type: APLY_DESC,
      // meta: ,
      // payload: ,
    })
  }
}

  return (
    <ContextProducts.Provider
      value={{
        loading: state.loading,
        products: state.products,
        cartProducts: state.cartProducts,
        cartProduct: state.cartProduct,
        itemscart: state.itemscart,
        modal: state.modal,
        quantityProduct: state.quantityProduct,
        subTotalPrice: state.subTotalPrice,
        totalPrice: state.totalPrice,
        codeDesc: state.codeDesc,
        desc: state.desc,
        getProducts,
        getCartProducts,
        closeModal,
        addToCart,
        removeFromCart,
        removeAllCart,
        incrementQuantityProduct,
        decrementQuantityProduct,
        aplyDesc,
      }}
    >
      {children}
    </ContextProducts.Provider>
  );
};
export default ProductsContext;
