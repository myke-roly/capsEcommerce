import React from 'react';
import Layout from '../containers/Layout';
import Title from '../utils/Title';
import { Container } from '../styled/index';

export default () => {
  return (
    <Layout>
      <Container>
        <Title title="Productos" />
      </Container>
    </Layout>
  );
};
