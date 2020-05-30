import React, { useContext, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../containers/layout';
import Form from '../common/Form';
import { ContextMessage } from '../context/MessageContext';
import { ContextAuth } from '../context/AuthContext';
import Register from '../components/signUp';

export default function Login() {
  const contextMessage = useContext(ContextMessage);
  const { messageAlert, showMessage } = contextMessage;

  const contextAuth = useContext(ContextAuth);
  const { message, auth, newRegister } = contextAuth;

  const router = useRouter();

  useEffect(() => {
    if (auth) router.push('/productos');
    if (message) showMessage(message, '');
  }, [auth, message, router]);

  return (
    <>
      <Head>
        <title>Registrarse - CAPSARG</title>
      </Head>
      <Layout>
        <Form>
          <Register
            showMessage={showMessage}
            messageAlert={messageAlert}
            newRegister={newRegister}
          />
        </Form>
      </Layout>
    </>
  );
}
