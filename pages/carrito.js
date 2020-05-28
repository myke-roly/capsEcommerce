import React from 'react';
import Head from 'next/head';
import { parseCookies } from '../libs/parseCookies';
import Layout from '../containers/layout';
import { Container } from '../common/Container';
import Title from '../common/Title';
import { axiosFetch } from '../API/axios';
import DetailsCart from '../components/detailsCart';
import Link from 'next/link';
import { ArrowLeftCircle } from 'react-feather';

export const Carrito = ({ filterProducts }) => {

  return (
    <>
      <Head>
        <title>Carrito | CAPSARG</title>
      </Head>
      <Layout>
        <Container>
          <Title title="Mi Carrito" />
          {filterProducts.length === 0 
          ? <Link href="/productos">
              <a>
                <ArrowLeftCircle size={18} /><br />
                Tu carrito esta vacio! vuelve al listado y llenalo!!
              </a>
            </Link>
          : <DetailsCart data={filterProducts} />}
        </Container>
        <style jsx>{`
          a {
            margin-top: 3rem;
            display: block;
            color: black;
            text-align: center;
            font-size: .9em;
          }
        `}
        </style>
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
