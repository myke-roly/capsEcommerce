import React, { useContext} from 'react';
import Link from 'next/link';
import { ItemsProducts, ItemProduct, ItemInfo } from './styled';
import { FaShoppingCart, FaArrowUp } from 'react-icons/fa';
import {ContextMobile } from '../../context/MobileContext';
import Title from '../../utils/Title';
import { Container } from '../../styled';

const ProductsHome = () => {
  
  const contextMobile = useContext(ContextMobile);
  const { modeMobile } = contextMobile;

  const productos = [
    {id: 0, img_url: './cap-model.webp', title: 'Gorra militar - verde', precio: 750},
    {id: 1, img_url: './cap-model.webp', title: 'Gorra militar - roja', precio: 750},
    {id: 2, img_url: './caps-model-2.png', title: 'Gorra militar - gris', precio: 750},
    {id: 3, img_url: './cap-model.webp', title: 'Gorra militar - negro', precio: 750},
    {id: 4, img_url: './caps-model-2.png', title: 'Gorra militar - bordo', precio: 1500},
    {id: 5, img_url: './caps-model-2.png', title: 'Gorra militar - bordo', precio: 1500},
    {id: 6, img_url: './caps-model-2.png', title: 'Gorra militar - bordo', precio: 1500}
  ]

  return (
    <ItemsProducts modeMobile={modeMobile}>
      <Title title='Productos destacados' />
      <Container>
        {productos.length > 0 && 
          productos.map(producto => (
            <Link href={`/producto/${producto.id}`} key={producto.id}>
              <ItemProduct href="!#">
              <img src={producto.img_url} alt={producto.title} />
              <ItemInfo modeMobile={modeMobile}>
                <h3>{producto.title}</h3>
                <p>$ {producto.precio}</p>
                <a href="!#">Agregar al carrito <FaShoppingCart /></a>
              </ItemInfo>
            </ItemProduct>
            </Link>
          ))
        }
    </Container>
    <Link href="" scroll={true}>
      <a style={{position: "fixed", right: "5%", bottom: "10%"}}><FaArrowUp /></a>
    </Link>
  </ItemsProducts>
  )
}

export default ProductsHome;