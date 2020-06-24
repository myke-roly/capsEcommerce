import React, { useEffect, useContext } from 'react';
import Head from 'next/head';
import Layout from '../containers/layout';
import ListProducts from '../components/listProducts';
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
        <meta name="description" content="Lista de todos los modelos de Gorras que tenemos en stock" />
        <title>Productos | CAPSARG</title>
      </Head>
      <Layout>
        <ListProducts productos={products} loading={loading} />
      </Layout>
    </>
  );
};

export default Productos;
