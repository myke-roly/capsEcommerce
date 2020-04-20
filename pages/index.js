import Layout from '../containers/layout';
import Head from 'next/head';
import Home from '../containers/home';

export default () => {
  return (
    <>
      <Head>
        <meta name="description" content="This is a page to buy caps online" />
        <title>CAPSARG | Home</title>
      </Head>
      <Layout>
        <Home />
      </Layout>
    </>
  );
};