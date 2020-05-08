import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Layout from '../containers/layout';
import ListProducts from '../components/listProducts';
import { axiosFetch } from '../API/axios';

const Productos = () => {

  const [ productos, setProductos ] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await axiosFetch.get('/api/productos');
      const productos = response.data;

      setProductos(productos);
    }

    fetchApi();
  }, []);

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

// export async function getServerSideProps() {
//}

export default Productos;
