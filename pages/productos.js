import React, { useEffect, useContext } from 'react';
import Head from 'next/head';
import Layout from '../containers/layout';
import ListProducts from '../components/listProducts';
import { axiosFetch } from '../API/axios';
import { ContextProducts } from '../context/ProductsContext';

const Productos = () => {
  const contextProducts = useContext(ContextProducts);
  const { products, loading, getProducts } = contextProducts;

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Head>
        <meta name="description" content="List of products" />
        <title>CAPSARG | Productos</title>
      </Head>
      <Layout>
        <ListProducts productos={products} loading={loading} />
      </Layout>
    </>
  );
};

export default Productos;
