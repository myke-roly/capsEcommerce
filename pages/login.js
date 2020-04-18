import React from 'react';
import Layout from '../containers/layout';
import FormLogin from '../containers/formLogin';
import {axiosFetch} from '../API';

export default function Login() {

  return (
    <Layout>
      <FormLogin />
    </Layout>
  );
};

// Login.getInitialProps = async (ctx) => {
// }


