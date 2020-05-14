import React, { createContext, useReducer } from 'react';
import SearchReducer from '../reducers/SearchReducer';
import { SEARCH } from '../types';
import { axiosFetch } from '../API/axios';

export const ContextSearch = createContext();
const SearchContext = (props) => {
  const initialState = {
    results: [],
  };

  const [state, dispatch] = useReducer(SearchReducer, initialState);

  const getResultsSearch = async (query) => {
    try {
      const response = await axiosFetch.get('/api/productos');
      const data = await response.data;
      const filter = data.products.filter(product => ( 
        product.title.indexOf(query) !== -1
      ));
      dispatch({
        type: SEARCH,
        payload: filter,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContextSearch.Provider
      value={{
        results: state.results,
        getResultsSearch,
      }}
    >
      {props.children}
    </ContextSearch.Provider>
  );
};

export default SearchContext;
