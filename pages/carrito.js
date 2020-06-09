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
import { useFetchById } from '../hooks/useFetchById';

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
  console.log('items: ',ids);
  const response = await axiosFetch(`/api/productos`);
  const products = response.data.products;
  const { filterProducts } = useFetchById(products, ids);

  return { filterProducts };
};

export default Carrito;
