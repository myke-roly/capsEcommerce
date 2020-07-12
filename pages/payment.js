import React from 'react';
import Head from 'next/head';
import PaymentWrapper from '../containers/payment';

const Payment = () => {
  return (
    <>
      <Head>
        <title>Payment || CAPSARG</title>
      </Head>
      <PaymentWrapper />
    </>
  );
};

export default Payment;
