import React from 'react';
import Head from 'next/head';
import Layout from '../containers/layout';
import ProductsHome from '../components/productsHome';

function Productos() {
  return (
    <>
      <Head>
        <meta name="description" content="This is a page to buy caps online" />
        <title>CAPSARG | Productos</title>
      </Head>
      <Layout>
        <ProductsHome />
      </Layout>
    </>
  );
}

export default Productos;
