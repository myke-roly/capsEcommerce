import React, { useContext, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../containers/layout';
import Form from '../common/Form';
import SingIn from '../components/signIn';
import { ContextMessage } from '../context/MessageContext';
import { ContextAuth } from '../context/AuthContext';

export default function Login() {
  const contextMessage = useContext(ContextMessage);
  const { messageAlert, showMessage } = contextMessage;

  const contextAuth = useContext(ContextAuth);
  const { message, auth, logIn, loading } = contextAuth;

  const router = useRouter();

  useEffect(() => {
    if (auth) {
      setTimeout(() => router.push('/productos'), 1500);
    };
    if (message) showMessage(message, '');
  }, [auth, message, router]);

  return (
    <>
      <Head>
        <title>Login - CAPSARG</title>
      </Head>
      <Layout>
        <Form>
          <SingIn 
            messageAlert={messageAlert} 
            logIn={logIn} 
            loading={loading}
          />
        </Form>
      </Layout>
    </>
  );
}
