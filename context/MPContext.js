import React, { createContext, useReducer, useEffect } from 'react';
import MPReducer from '../reducers/MPReducer';
import { useFetch } from '../hooks/useFetch';
<<<<<<< HEAD
=======
import { axiosFetch } from '../API/axios';
>>>>>>> 412e4c530215dca7d5aaf9626fc7c3ef9ffebc33
import axios from 'axios';

export const ContextMP = createContext();
const MPContext = ({ children }) => {
  const getMethodsPayment = async () => {
    // const url = 'https://api.mercadopago.com/v1/payment_methods/?access_token=APP_USR-5829357135251490-052000-2484795b9b0db9256a78b7096bc9f5ba-570859984'
    const url = `${process.env.BASE_URL_MP}payment_methods/?access_token=${process.env.ACCESS_TOKEN}`;
    fetch(url)
    .then(response => console.log(response))
    .catch(err => console.log(err));
  };

  async function getDat() {
    const url = `https://api.mercadopago.com/pos?limit=100&access_token=${process.env.ACCESS_TOKEN}`;
    const response = await axios.get(url);
    console.log(response);
  }

  return (
<<<<<<< HEAD
    <ContextMP.Provider value={{ dataMP: data, getDat }}>
=======
    <ContextMP.Provider value={{ 
      dataMP: [], 
      getMethodsPayment 
    }}>
>>>>>>> 412e4c530215dca7d5aaf9626fc7c3ef9ffebc33
      {children}
    </ContextMP.Provider>
  );
};

export default MPContext;
