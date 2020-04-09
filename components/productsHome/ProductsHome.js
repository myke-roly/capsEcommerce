import React, { useContext} from 'react';
import { ItemsProducts, ItemProduct, ItemInfo } from './styled';
import { FaShoppingCart } from 'react-icons/fa';
import {ContextMobile } from '../../context/MobileContext';
import Button from '../../utils/Button';
import { Container } from '../../styled';

const ProductsHome = () => {

  const contextMobile = useContext(ContextMobile);
  const {modeMobile} = contextMobile;

  return (
    <ItemsProducts modeMobile={modeMobile}>
      <Container>
        <ItemProduct href="!#">
          <img src="./cap-model.webp" alt="gorra" />
          <ItemInfo>
            <h3>Gorra militar - verde</h3>
            <p>$ 750.00</p>
            <a href="!#">Agregar al carrito <FaShoppingCart /></a>
          </ItemInfo>
        </ItemProduct>
        <ItemProduct>
          <img src="./cap-model.webp" alt="gorra" />
          <ItemInfo>
            <h3>Gorra militar - verde</h3>
            <p>$ 750.00</p>
            <a href="!#">Agregar al carrito <FaShoppingCart /></a>
          </ItemInfo>
        </ItemProduct>
        <ItemProduct>
          <img src="./cap-model.webp" alt="gorra" />
          <ItemInfo>
            <h3>Gorra militar - verde</h3>
            <p>$ 750.00</p>
            <a href="!#">Agregar al carrito <FaShoppingCart /></a>
          </ItemInfo>
        </ItemProduct>
        <ItemProduct>
          <img src="./cap-model.webp" alt="gorra" />
          <ItemInfo>
            <h3>Gorra militar - verde</h3>
            <p>$ 750.00</p>
            <a href="!#">Agregar al carrito <FaShoppingCart /></a>
          </ItemInfo>
        </ItemProduct>
        <ItemProduct>
          <img src="./cap-model.webp" alt="gorra" />
          <ItemInfo>
            <h3>Gorra militar - verde</h3>
            <p>$ 750.00</p>
            <a href="!#">Agregar al carrito <FaShoppingCart /></a>
          </ItemInfo>
        </ItemProduct>
        <ItemProduct>
          <img src="./cap-model.webp" alt="gorra" />
          <ItemInfo>
            <h3>Gorra militar - verde</h3>
            <p>$ 750.00</p>
            <a href="!#">Agregar al carrito <FaShoppingCart /></a>
          </ItemInfo>
        </ItemProduct>
        <ItemProduct>
          <img src="./cap-model.webp" alt="gorra" />
          <ItemInfo>
            <h3>Gorra militar - verde</h3>
            <p>$ 750.00</p>
            <a href="!#">Agregar al carrito <FaShoppingCart /></a>
          </ItemInfo>
        </ItemProduct>
    </Container>
    <p><Button text="Mas Productos" color="tercero" /></p>
  </ItemsProducts>
  )
}

export default ProductsHome;