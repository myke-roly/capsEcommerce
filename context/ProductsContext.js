import { createContext, useReducer, useState } from 'react';
import ProductsReducer from '../reducers/ProductsReducer';
import { axiosFetch } from '../API/axios';
import { LIST_PRODUCTS } from '../types'
import { useFetch } from '../hooks/useFetch';

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

  const addToCart = (id) => {
    console.log('add to cart')

    // si el producto ya existe en el carrito no agregar

    // agregar producto al carrito
    
    // mostrar modal
    showModal();
  } 

  const removeFromCart = (id) => {
    console.log('remove from cart', id)
  }

  const removeAllCart = () => {
    console.log('eliminar todos los elementos del carrito')
  }

  // Mostrar y ocultar modal
  const showModal = () => {
    console.log('show Modal')
  }

  const closeModal = () => {
    console.log('ocultar modal')
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
