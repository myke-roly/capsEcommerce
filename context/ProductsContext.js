import { createContext, useReducer } from 'react';
import ProductsReducer from '../reducers/ProductsReducer';
import { axiosFetch } from '../API/axios';
import { LIST_PRODUCTS } from '../types'

export const ContextProducts = createContext();
const ProductsContext = ({ children }) => {
  let initialState = {
    products: [],
    loading: true
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

  return (
    <ContextProducts.Provider
      value={{
        loading: state.loading,
        products: state.products,
        getProducts
      }}
    >
      {children}
    </ContextProducts.Provider>
  );
};
export default ProductsContext;
