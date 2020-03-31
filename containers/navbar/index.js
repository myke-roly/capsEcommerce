import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import { Container } from '../../styled/index';
import {
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa';
import BurguerMenu from '../../utils/BurguerMenu';
import { Nav, Title, Links, CartItem, MenuMobile } from './styled';
import { ContextMobile } from '../../context/MobileContext';

const NavBar = () => {

  const contextMobile = useContext(ContextMobile)
  const {mobile, modeMobile, getModeMobile} = contextMobile

  const links = [
    { id: 1, title: 'productos', path: '/productos' },
    { id: 2, title: 'sobre nosotros', path: '/sobre-nosotros' },
    { id: 3, title: 'contacto', path: '/contacto' }
  ];

  const Item = () => {
    return links.map(link => (
      <li key={link.id}>
        <Link href={link.path}>
          <a>{link.title}</a>
        </Link>
      </li>
    ));
  };

  const [item, setItem] = useState(0);

  return (
    <>
      <Nav>
        <Container>
          <Title>
            <Link href="/">
              <a>
                Caps <small>ooo</small>
              </a>
            </Link>
          </Title>
          <Links>
            <Item />
            <div>
              <FaSearch />
              <CartItem onClick={() => setItem(item + 1)}>
                <FaShoppingCart />
                <span>{item}</span>
              </CartItem>
              <FaUser />
            </div>
          </Links>
        </Container>
        {mobile && (
          <BurguerMenu
            modeMobile={modeMobile}
            handleModeMobile={() => getModeMobile(!modeMobile)}
          />
        )}
        {modeMobile && (
          <MenuMobile>
            <ul>
              <Item />
              <a href="https://www.twitter.com/myke_roly" target="_blank" rel="noreferrer noopener"><FaTwitter /></a>
              <a href="https://www.instagram.com/myke_roly" target="_blank" rel="noreferrer noopener"><FaInstagram /></a>
              <a href="https://www.facebbok.com/" target="_blank" rel="noreferrer noopener"><FaFacebook /></a>
              <a href="https://www.youtube.com/myke-roly" target="_blank" rel="noreferrer noopener"><FaYoutube /></a>
              
              
              
              
            </ul>
          </MenuMobile>
        )}
      </Nav>
    </>
  );
};

export default NavBar;
