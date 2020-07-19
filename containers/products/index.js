import React from 'react';
import { ProductsStyle } from './styled';
import ListProducts from '../../components/listProducts';
import FilterProducts from '../../components/filterProducts';
import { Container } from '../../common/Container';

const Products = ({ products }) => {
  return (
    <ProductsStyle>
      <Container>
        <FilterProducts />
        <ListProducts productos={products} />
      </Container>
    </ProductsStyle>
  );
};

export default Products;
