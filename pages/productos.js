import React, { Component } from 'react';
import Head from 'next/head';
import Layout from '../containers/layout';
import ListProducts from '../components/listProducts';
import { axiosFetch } from '../API/axios';

const Productos = ({ productos }) => {
  return (
    <>
      <Head>
        <meta name="description" content="List of products" />
        <title>CAPSARG | Productos</title>
      </Head>
      <Layout>
        <ListProducts productos={productos.products} />
      </Layout>
    </>
  );
};

export async function getServerSideProps() {
  const response = await axiosFetch.get('/api/productos');
  const productos = response.data;
  return { props: { productos } };
}

export default Productos;
