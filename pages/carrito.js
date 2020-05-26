import React from 'react';
import Head from 'next/head';
import { parseCookies } from '../libs/parseCookies';
import Layout from '../containers/layout';
import { Container } from '../utils/Container';
import Title from '../utils/Title';
import { axiosFetch } from '../API/axios';
import Products from '../components/listProducts';
import Button from '../utils/Button';

export const Carrito = ({ filterProducts }) => {

  return (
    <>
      <Head>
        <title>Carrito | CAPSARG</title>
      </Head>
      <Layout>
        <Container>
          <Title title="Carrito" />
          {filterProducts.length === 0 && <p>Aun no agregaste ningun producto</p>}
          <div style={{ minHeight: '50vh', padding: '2rem' }}>
            <Products productos={filterProducts}  />
            <Button color="dark" text="Agregar mas productos" />
          </div>
        </Container>
      </Layout>
    </>
  );
};

Carrito.getInitialProps = async ({ req }) => {
  const ids = parseCookies(req);
  const response = await axiosFetch(`/api/productos`);
  const products = response.data.products;
  let filterProducts = [];

  if(Object.entries(ids).length !== 0) {
    JSON.parse(ids.IDItem).map(id => {
      products.filter(product => id.id === product._id && filterProducts.push(product));
    });
  }
  
  return { filterProducts };
};

export default Carrito;
