import Layout from '../containers/layout';
import Head from 'next/head';
import Hero from '../containers/hero';
import Main from '../containers/main';

export default () => {
  return (
    <>
      <Head>
        <meta name="description" content="This is a page to buy caps online" />
        <title>CAPSARG | Home</title>
      </Head>
      <Layout>
        <Hero />
        <Main />
      </Layout>
    </>
  );
};