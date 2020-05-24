import React from 'react';
import Layout from '../../containers/layout';
import { Container } from '../../utils/Container';
import { axiosFetch } from '../../API/axios';
import Product from '../../components/product';
import Head from 'next/head';
 
const Producto = ({ data, id }) => {

  return (
    <>
      <Head><title>{data.title} | CAPSARG</title></Head>
      <Layout>
        <Container>
          <Product data={data} />
        </Container>
      </Layout>
    </>
  );
};

export async function getServerSideProps({ query }) {
  const { id } = query;
  const response = await axiosFetch.get(`/api/producto/${id}`);
  const data = response.data.product;
  return { props: { data, id } };
}

export default Producto;
