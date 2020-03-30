import React, { useState } from 'react';import Nav from '../navbar';
import Footer from '../footer';



export default (props) => {
  return (
    <>
      <Nav />
      {props.children}
      <Footer />
    </>
  );
};
