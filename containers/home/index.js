import React from 'react';
import Head from 'next/head';
import Header from '../header';
import Main from '../main';

const Home = () => {
  return (
    <>
      <Head>
        <meta name="description" content="This is a page to buy caps online" />
        <title>Caps.arg | Home</title>
      </Head>
      <Header />
      <Main />
    </>
  );
};

export default Home;
