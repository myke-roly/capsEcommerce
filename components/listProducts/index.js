import React, { useContext } from 'react';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import { ItemsProducts, ItemProduct, ItemInfo } from './styled';
import { Container } from '../../common/Container';
import { ContextMobile } from '../../context/MobileContext';
import Loader from '../../common/Loader';

const Producto = ({ productos, loading }) => {
  const contextMobile = useContext(ContextMobile);
  const { modeMobile } = contextMobile;

  return (
    <>
      {loading && <Loader />}
      {productos && (
        <ItemsProducts modeMobile={modeMobile}>
          <Container>
            {productos.map((product) => (
              <div key={product._id}>
                <Link href={`/producto/[id]/`} as={`/producto/${product._id}`}>
                  <ItemProduct>
                    <figure>
                      <img src={product.images[0]} alt="img" />
                    </figure>
                    <ItemInfo modeMobile={modeMobile}>
                      <h3>{product.title}</h3>
                      <p>$ {product.price}</p>
                      <a>
                        Agregar al carrito <FaShoppingCart />
                      </a>
                    </ItemInfo>
                  </ItemProduct>
                </Link>
              </div>
            ))}
          </Container>
        </ItemsProducts>
      )}
    </>
  );
};
export default Producto;
