import React, { useState } from 'react';import Nav from '../navbar';
import Footer from '../footer';
import Services from '../../components/services/Services';



export default (props) => {
  return (
    <>
      <Nav />
      {props.children}
      <Services />
      <Footer />
    </>
  );
};
