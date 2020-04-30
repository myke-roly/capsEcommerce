import React, { useContext } from 'react';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import { ItemsProducts, ItemProduct, ItemInfo } from './styled';
import { Container } from '../../styled';
import {ContextMobile} from '../../context/MobileContext';

const Producto = ({ productos }) => {
  const contextMobile = useContext(ContextMobile);
  const { modeMobile } = contextMobile;

  return (
    <ItemsProducts modeMobile={modeMobile}>
      <Container>
        {productos && 
        productos.map((product) => (
          <div key={product._id}>
            <Link href={`/productos/[id]/`} as={`/productos/${product._id}`}>
              <ItemProduct>
                <figure>
                  <img src={product.images[0]} alt="img" />
                </figure>
                <ItemInfo modeMobile={modeMobile}>
                  <h3>{product.title}</h3>
                  <p>$ {product.precio}</p>
                  <a>Agregar al carrito <FaShoppingCart /></a>
                </ItemInfo>
              </ItemProduct>
            </Link>
          </div>
        ))}
      </Container>
    </ItemsProducts>
  );
};

export default Producto;
