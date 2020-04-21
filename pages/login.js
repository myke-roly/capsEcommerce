import React from 'react';
import Layout from '../containers/layout';
import FormLogin from '../containers/formLogin';
import { authToken } from '../API/token';
import fetch from 'isomorphic-fetch';
import { axiosFetch } from '../API/axios';

function Login({ data }) {

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (token) authToken(token);
  // }, []);
  
  console.log(data);
  return (
    <Layout>
      <FormLogin />
      {/* <h1>login</h1> */}
    </Layout>
  );
}

Login.getInitialProps = async (ctx) => {
  const response = await axiosFetch.get('/api/me');

  const data = await response.json();

  return { data }
};


export default Login;
