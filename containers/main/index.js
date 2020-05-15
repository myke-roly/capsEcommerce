import React, { useEffect, useContext } from 'react';
import Link from 'next/link';
import { WrapperMain, WrapperGrid } from './styled';
import Button from '../../utils/Button';
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
        <img src="./cap-man.jpeg" alt="img-girl" />
        <div className="section-content">
          <h2>Si quieres estar a la moda estas en el lugar corretco!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            magnam maxime assumenda similique saepe illum dignissimos debitis
            quibusdam tenetur sit corrupti odit dolorem pariatur. Non tempore
            voluptas fugit modi eveniet?
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
