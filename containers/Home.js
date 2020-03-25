import React from 'react';
import Head  from 'next/head';
import Header from './Header';

const Home = () => {
  return (
    <>
      <Head>
        <meta name="description" content="This is a page to buy caps online" />
        <title>Caps Arg || Home</title>
      </Head>
      <Header />
    </>
  )
}

export default Home;