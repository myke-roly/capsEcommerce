import React from 'react';
import Head from 'next/head'; 
import { parseCookies } from '../libs/parseCookies';
import Layout from '../containers/layout';
import { Container } from '../utils/Container';
import Title from '../utils/Title';
import { axiosFetch } from '../API/axios';

export const Carrito = ({ data }) => {

  return (
    <>
      <Head><title>Carrito | CAPSARG</title></Head>
      <Layout>
        <Container>
          <Title  title="Carrito" />
          <div style={{minHeight: '50vh'}}>
            <img style={{width: '150px'}} src={data.images[0]} alt={data.title}/>
            <h3>{data.title}</h3>
            <p>{data.price}</p>
          </div>
        </Container>
      </Layout>
    </>
  );
};

Carrito.getInitialProps = async ({req}) => {
  const { IDItem } = parseCookies(req);
  const response = await axiosFetch(`/api/producto/${JSON.parse(IDItem)}`);
  const data = response.data.product;

  return { data };
};

export default Carrito;
