import React from 'react';
import Layout from '../../containers/layout';
import { Container } from '../../styled/';
import { axiosFetch } from '../../API/axios';
import Product from '../../components/product';

const Producto = ({ data }) => {
  return (
    <Layout>
      <Container>
        <Product data={data} />
      </Container>
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const { id } = ctx.params;
  const response = await axiosFetch(`/api/producto/${id}`);
  const data = response.data.product;

  return { props: { data } };
}

export default Producto;
