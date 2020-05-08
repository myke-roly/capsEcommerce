import React, { useEffect, useState } from 'react';
import Layout from '../../containers/layout';
import axios from 'axios';
import { Container } from '../../styled';
import { axiosFetch } from '../../API/axios';
import Product from '../../components/product';
import { useRouter } from 'next/router';
 
const Producto = () => {
  const { query } = useRouter();
  const { id } = query;

  const [producto, setProducto] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      const response = await axiosFetch.get(`/api/producto/${id}`);
      const data = response.data.product;
      console.log(data);

      setProducto(data);
    };
    fetchApi();
  }, [id]);

  return (
    <Layout>
      <Container>{producto && <Product data={producto} />}</Container>
    </Layout>
  );
};

// export async function getServerSideProps(ctx) {
//   const { id } = ctx.params;
//   const response = await axiosFetch.get(`/api/producto/${id}`);
//   const data = response.data.product;

//   return { props: { data } };
// }

export default Producto;
