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

  function printProduct() {
    return productos.map((product) => (
      <Link key={product._id} href={`/producto/[id]/`} as={`/producto/${product._id}`}>
        <ItemProduct modeMobile={modeMobile}>
          <figure>
            <img src={product.images[0]} alt="img" />
          </figure>
          <ItemInfo modeMobile={modeMobile}>
            <p>$ {product.price} <FaShoppingCart size="12" color="#555" /></p>
            <h3>{product.title}</h3>
          </ItemInfo>
        </ItemProduct>
      </Link>
    ))
  }

  return (
    <>
      {loading && <Loader />}
      {productos && (
        <ItemsProducts modeMobile={modeMobile}>
            {printProduct()}
        </ItemsProducts>
      )}
    </>
  );
};
export default Producto;
