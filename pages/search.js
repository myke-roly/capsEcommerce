import Layout from '../containers/layout';
import Title from '../utils/Title';
import { Container } from '../styled/';
import { axiosFetch } from '../API/axios';
import Products from '../components/listProducts';

const Search = ({data}) => {

  return(
    <Layout>
      <Container>
        <Title title="Buscar Productos...." />
        <Products productos={data} />
      </Container>
    </Layout>
  )
}

export async function getServerSideProps(ctx) {
  const { query } = ctx.query;
  const response = await axiosFetch.get(`/api/search?query=${query}`);
  const data = response.data;
  return { props: {data: data.findProducts}};
}

export default Search;