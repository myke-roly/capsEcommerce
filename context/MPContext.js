import React, { createContext, useReducer, useEffect } from 'react';
import MPReducer from '../reducers/MPReducer';
import { useFetch } from '../hooks/useFetch';

export const ContextMP = createContext();
const MPContext = ({ children }) => {
  let initialState = {
    data: []
  }
  const [state, dispatch]= useReducer(initialState, MPReducer);

  useEffect(() => {
    const url = `${process.env.URL_BASE_MP}/users/me?access_token=${process.env}`;
    const { data } = useFetch(url);
    try {
      dispatch({
        type: 'SHOW_DATA_MP',
        payload: data
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <ContextMP.Provider value={{state}}>
      {children}
    </ContextMP.Provider>
  )
}

export default MPContext;