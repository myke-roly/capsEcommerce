import { createContext, useReducer, useState } from 'react';
import ProductsReducer from '../reducers/ProductsReducer';
import { axiosFetch } from '../API/axios';
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

export const ContextProducts = createContext();
const ProductsContext = ({ children }) => {
  let initialState = {
    products: [],
    loading: true,
    itemscart: 0,
    cartProducts: [],
    quantityProduct: 1,
    subTotalPrice: 0,
    totalPrice: 0,
    modal: false
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

  const addToCart = async (id) => {
    // si el producto ya existe en el carrito no agregar
    if(state.cartProducts.length > 0)  {
      if(id === state.cartProducts[0]._id) return;
    }
    console.log('add to cart');
    const response = await axiosFetch.get('/api/productos');
    const { products } = response.data;
    const cartProduct = products.filter(product => product._id === id);
    
    // agregar producto al carrito
    dispatch({
      type: ADD_TO_CART,
      payload: cartProduct
    })
  }

  const removeFromCart = (id) => {
    console.log('remove from cart', id)
    // const cartProduct = products.filter(product => product._id === id);
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
}

const decrementQuantityProduct = () => {
  console.log('quitar uno');
  // no se puede tene menos de 1
}

const aplyDesc = (code) => {
  console.log('aplicar descuento');

  //verificar si el codigo es valido

  // sumar al total de pago
}

  return (
    <ContextProducts.Provider
      value={{
        loading: state.loading,
        products: state.products,
        cartProducts: state.cartProducts,
        itemscart: state.itemscart,
        modal: state.modal,
        quantityProduct: state.quantityProduct,
        subTotalPrice: state.subTotalPrice,
        totalPrice: state.totalPrice,
        getProducts,
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
