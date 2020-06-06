import React, { createContext, useReducer, useEffect } from 'react';
import MPReducer from '../reducers/MPReducer';
import { useFetch } from '../hooks/useFetch';

export const ContextMP = createContext();
const MPContext = ({ children }) => {
  const url = `${process.env.URL_BASE_MP}/users/me?access_token=${process.env.ACCESS_TOKEN}`;
  const { data } = useFetch(url);

  return (
    <ContextMP.Provider value={{ dataMP: data }}>
      {children}
    </ContextMP.Provider>
  );
};

export default MPContext;
