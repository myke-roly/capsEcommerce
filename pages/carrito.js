import React, { useContext, useEffect } from 'react';
import Head from 'next/head';
import Layout from '../containers/layout';
import { Container } from '../common/Container';
import Title from '../common/Title';
import DetailsCart from '../components/detailsCart';
import Link from 'next/link';
import { ArrowLeftCircle } from 'react-feather';

import { ContextProducts } from '../context/ProductsContext';

export const Carrito = ({ cookie }) => {
  
  const contextProducts = useContext(ContextProducts);
  const { cartProducts, getCartProducts } = contextProducts;
  
  useEffect(() => {
    getCartProducts()
  }, []);

  return (
    <>
      <Head>
        <title>Carrito | CAPSARG</title>
      </Head>
      <Layout>
        <Container>
          <Title title="Mi Carrito" />
          <pre>{cookie}</pre>
          {cartProducts.length === 0 
          ? <Link href="/productos">
              <a>
                <ArrowLeftCircle size={18} /><br />
                Tu carrito esta vacio! vuelve al listado y llenalo!!
              </a>
            </Link>
          : <DetailsCart data={cartProducts} />}
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

export default Carrito;