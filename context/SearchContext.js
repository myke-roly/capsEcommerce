import React, { createContext, useReducer } from 'react';
import SearchReducer from '../reducers/SearchReducer';
import { SEARCH, CLEAN_SEARCH } from '../types';
import { axiosFetch } from '../API/axios';

export const ContextSearch = createContext();
const SearchContext = (props) => {
  const initialState = {
    results: [],
  };

  const [state, dispatch] = useReducer(SearchReducer, initialState);

  async function getResultsSearch(query, signal) {
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

  function cleanSearch() {
    dispatch({
      type: CLEAN_SEARCH,
    })
  }

  return (
    <ContextSearch.Provider
      value={{
        results: state.results,
        getResultsSearch,
        cleanSearch
      }}
    >
      {props.children}
    </ContextSearch.Provider>
  );
};

export default SearchContext;
