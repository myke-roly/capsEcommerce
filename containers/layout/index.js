import React from 'react';
import Nav from '../navbar';
import Footer from '../footer';
import Services from '../../common/services/Services';

export default (props) => {
  return (
    <>
      <Nav />
      <main style={{minHeight: '70vh'}}>
        {props.children}
      </main>
      <Services />
      <Footer />
    </>
  );
};
