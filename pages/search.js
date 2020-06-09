import Layout from '../containers/layout';
import Head from 'next/head';
import Title from '../common/Title';
import { Container } from '../common/Container';
import { axiosFetch } from '../API/axios';
import Products from '../components/listProducts';

const Search = ({data}) => {

  return(
    <>
      <Head>
        <title>Search | CAPSARG</title>
      </Head>
      <Layout>
        <Container>
          <Title title="Buscar Productos" />
          {data.length > 0 
          ? <Products productos={data} /> 
          : <p>No hay resultdaos de tu busqueda...</p>}
          <style jsx>{`
            p {
              text-align: center;
              color: #555;
              padding-top: 50px;
              min-height: 50vh;
            }
          `}</style>
        </Container>
      </Layout>
    </>
  )
}

export async function getServerSideProps(ctx) {
  const { query } = ctx.query;
  const response = await axiosFetch.get(`/api/search?query=${query}`);
  const data = response.data;
  return { props: {data: data.findProducts}};
}

export default Search;