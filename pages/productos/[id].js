import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../containers/layout';
import { Container } from '../../styled/';

export default () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <Container>
        <h1>producto {id}</h1>
      </Container>
    </Layout>
  )
}