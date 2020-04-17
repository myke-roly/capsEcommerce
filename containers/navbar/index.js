import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import { Nav, Title, Links, CartItem } from './styled';
import { Container } from '../../styled/index';
import { ContextMobile } from '../../context/MobileContext';
import MenuMobile from '../../utils/MenuMobile';
import BurguerMenu from '../../utils/BurguerMenu';

const NavBar = () => {
  const contextMobile = useContext(ContextMobile);
  const { modeMobile } = contextMobile;

  const [menuBurguer, setMenuBurguer] = useState(false);
  const [item, setItem] = useState(0);

  const links = [
    { id: 1, title: 'productos', path: '/productos' },
    { id: 2, title: 'sobre nosotros', path: '/sobre-nosotros' },
    { id: 3, title: 'contacto', path: '/contacto' }
  ];

  const Items = () => {
    return links.map(link => (
      <li key={link.id}>
        <Link href={link.path} passHref>
          <a>{link.title}</a>
        </Link>
      </li>
    ));
  };

  return (
    <Nav>
      <Container>
        <Title>
          <Link href="/"><a>Caps <small>..o</small></a></Link>
        </Title>
        {!modeMobile && (
          <Links>
            <Items />
            <div>
              <FaSearch />
              <CartItem onClick={() => setItem(item + 1)}>
                <FaShoppingCart /><span>{item}</span>
              </CartItem>
              <Link href="/login" passHref>
                <a>
                  <FaUser/>
                </a>
              </Link>
            </div>
          </Links>
        )}

        {/* Menu Mode Mobile */}
        {modeMobile && (
          <div>
            <div>
              <FaSearch />
              <CartItem onClick={() => setItem(item + 1)}>
                <FaShoppingCart /><span>{item}</span>
              </CartItem>
              <Link href="/login" passHref>
                <a>
                  <FaUser/>
                </a>
              </Link>
            </div>
            <BurguerMenu
              menuBurguer={menuBurguer}
              changeMenuBurguer={() => setMenuBurguer(!menuBurguer)}
            />
          </div>
        )}
        {menuBurguer && (
          <MenuMobile>
            <Items />
          </MenuMobile>
        )}
      </Container>
    </Nav>
  );
};

export default NavBar;
