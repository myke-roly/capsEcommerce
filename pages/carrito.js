import React, { useEffect } from 'react';
import Layout from '../containers/layout';
import { Container } from '../styled';
import { parseCookies } from '../libs/parseCookies';

export const Carrito = ({ IDItem }) => {
  console.log(IDItem);
  return (
    <Layout>
      <Container>
        <h1>Carrito</h1>
        <hr />
      </Container>
    </Layout>
  );
};

Carrito.getInitialProps = async ({req}) => {
  const cookies = parseCookies(req);

  return { IDItem: cookies.IDItem };
};

export default Carrito;
