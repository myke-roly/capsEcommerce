import Layout from '../containers/layout';
import Link from 'next/link';
import Contact from '../containers/contact';
import Head from 'next/head';

export default () => {
  return (
    <>
      <Head>
        <meta name="description" content="This is a page to buy caps online" />
        <title>Contacto | CAPSARG</title>
      </Head>
      <Layout>
        <Contact />
      </Layout>
    </>
  );
};
