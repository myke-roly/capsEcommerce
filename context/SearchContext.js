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

  const getResultsSearch = async (query, signal) => {
    try {
      const response = await axiosFetch.get(`/api/search?query=${query}`, {signal: signal});
      const { findProducts } = response.data;
      dispatch({
        type: SEARCH,
        payload: findProducts,
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
