import React, { useEffect, useContext } from 'react';
import Link from 'next/link';
import { WrapperMain, WrapperGrid } from './styled';
import Button from '../../common/Button';
import ListProducts from '../../components/listProducts';
import { ContextProducts } from '../../context/ProductsContext';

const Main = () => {

  const contextProducts = useContext(ContextProducts);
  const { products, getProducts } = contextProducts;

  useEffect(() => {
    getProducts();
  }, []);
  
  return (
    <WrapperMain>
      <ListProducts productos={products} />
      <WrapperGrid>
        <img src="./cap-man.jpeg" alt="img-cap" />
        <div className="section-content">
          <h2>Si quieres estar a la moda estas en el lugar corretco!</h2>
          <p>
            Ultimomos modelos de gorras del mercado, fabricados con el mejor material que se puede encontrar en el mercado. Variedad en colores y talles.
          </p>
            <Link href="/productos">
              <a><Button text="Mas Productos" color="secondary" /></a>
            </Link>
        </div>
      </WrapperGrid>
    </WrapperMain>
  );
};

export default Main;
