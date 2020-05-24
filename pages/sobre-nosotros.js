import React from 'react';
import Layout from '../containers/layout';
import Head from 'next/head';
import About from '../containers/about';

export default () => {
  return (
    <>
      <Head>
        <meta name="description" content="This is a page to buy caps online" />
        <title>Sobre Nosotros | CAPSARG</title>
      </Head>
      <Layout>
        <About />
      </Layout>
    </>
  );
};
