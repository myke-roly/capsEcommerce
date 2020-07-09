import React, { createContext, useReducer, useEffect } from 'react';
import MPReducer from '../reducers/MPReducer';
import { useFetch } from '../hooks/useFetch';
import axios from 'axios';

export const ContextMP = createContext();
const MPContext = ({ children }) => {
  const url = `${process.env.URL_BASE_MP}/users/me?access_token=${process.env.ACCESS_TOKEN}`;
  const { data } = useFetch(url);

  async function getDat() {
    const url = `https://api.mercadopago.com/pos?limit=100&access_token=${process.env.ACCESS_TOKEN}`;
    const response = await axios.get(url);
    console.log(response);
  }

  return (
    <ContextMP.Provider value={{ dataMP: data, getDat }}>
      {children}
    </ContextMP.Provider>
  );
};

export default MPContext;
