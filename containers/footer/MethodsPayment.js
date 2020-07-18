import React, { useEffect } from 'react';
import { Flags } from './styled';
import { useFetch } from '../../hooks/useFetch';

const MethodsPayment = () => {
  const url = `${process.env.URL_BASE_MP}/payment_methods/?access_token=${process.env.ACCESS_TOKEN}`;
  const { data: methodsPayments } = useFetch(url, null);

  function displayItems() {
    if(methodsPayments.length > 0) {
      return methodsPayments.map(method => (
        <img key={method.id} src={method.thumbnail} title={method.name} />
      ))
    }
  }
  
  return (
    <Flags>
      {displayItems()}
    </Flags>
  )
}

export default MethodsPayment;