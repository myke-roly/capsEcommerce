import React, { useState } from 'react';import Nav from './Nav';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <>
      <Nav />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
