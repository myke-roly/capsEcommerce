import React, { createContext, useReducer, useEffect } from 'react';
import MPReducer from '../reducers/MPReducer';
import { useFetch } from '../hooks/useFetch';
import axios from 'axios';

export const ContextMP = createContext();
const MPContext = ({ children }) => {
  const getMethodsPayment = async () => {
    // const url = 'https://api.mercadopago.com/v1/payment_methods/?access_token=APP_USR-5829357135251490-052000-2484795b9b0db9256a78b7096bc9f5ba-570859984'
    const url = `${process.env.URL_BASE_MP}/payment_methods/?access_token=${process.env.ACCESS_TOKEN}`;
    await axios.get(url)
    .then(response => console.log(response))
    .catch(err => console.log(err));
  };

  // async function getDat() {
  //   const url = `https://api.mercadopago.com/pos?limit=100&access_token=${process.env.ACCESS_TOKEN}`;
  //   const response = await axios.get(url);
  //   console.log(response);
  // }

  return (
    <ContextMP.Provider value={{ 
      dataMP: [], 
      getMethodsPayment 
    }}>
      {children}
    </ContextMP.Provider>
  );
};

export default MPContext;
