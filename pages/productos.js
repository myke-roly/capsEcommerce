import React from 'react';
import Head from 'next/head';
import Layout from '../containers/layout';
import { axiosFetch } from '../API/axios';
import Products from '../containers/products';

const Productos = ({ products }) => {
  return (
    <>
      <Head>
        <meta name="description" content="Lista de todos los modelos de Gorras que tenemos en stock" />
        <title>Productos | CAPSARG</title>
      </Head>
      <Layout>
        <Products products={products} />
      </Layout>
    </>
  );
};

export async function getServerSideProps() {
  const response = await axiosFetch.get('/api/productos');
  const { products } = response.data;

  return { props: { products }}
}

export default Productos;
