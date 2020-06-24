import React, { useState, useEffect, useContext } from 'react';
import { Nav, Title, Links, CartItem } from './styled';
import { User, ShoppingCart } from 'react-feather';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Search from '../../components/searchInput';
import { Container } from '../../common/Container';
import MenuMobile from '../../common/MenuMobile';
import BurguerMenu from '../../common/BurguerMenu';

import { ContextAuth } from '../../context';
import { ContextMobile } from '../../context';
import { ContextProducts } from '../../context';

const NavBar = () => {
  const contextMobile = useContext(ContextMobile);
  const { modeMobile } = contextMobile;
  const [menuMobile, setMenuMobile] = useState(false);

  const contextAuth = useContext(ContextAuth);
  const { getUser, user, auth, logOut } = contextAuth;
  
  const contextProducts = useContext(ContextProducts);
  const { itemsCart, getTotalItemsCart } = contextProducts;

  useEffect(() => {
    getUser();
    getTotalItemsCart();
  }, []);

  const router = useRouter();

  function toggleMenuMobile() {
    if (modeMobile) setMenuMobile(!menuMobile);
  }

  const links = [
    { id: 0, title: 'inicio', path: '/' },
    { id: 1, title: 'productos', path: '/productos' },
    { id: 2, title: 'sobre nosotros', path: '/sobre-nosotros' },
    { id: 3, title: 'contacto', path: '/contacto' },
  ];

  const Items = () =>
    links.map((link) => (
      <li key={link.id}>
        <Link href={link.path} passHref>
          <a className={router.pathname === link.path ? 'active' : ''}>{link.title}</a>
        </Link>
      </li>
    ));

  return (
    <Nav>
      <Container>
        <Title>
          <Link href="/">
            <a>Caps <small>.:: o</small></a>
          </Link>
        </Title>
        {!modeMobile && (
          <Links>
            <Search />
            <Items />
            <div>
              <Link href="/carrito">
                <CartItem>
                  <ShoppingCart size={18} />
                  <span className="item-cart">{itemsCart}</span>
                </CartItem>
              </Link>
              {!auth ? (
                <Link href="/iniciar-sesion" passHref>
                  <a>
                    <User size={18} />
                  </a>
                </Link>
              ) : (
                <div>
                  <span className="user" arial-label="User">
                    {user && user.user.name}
                  </span>
                  <span
                    role="button"
                    className="logout"
                    onClick={() => logOut()}
                  >
                    {' '}
                    Cerrar Sesion
                  </span>
                </div>
              )}
            </div>
          </Links>
        )}

        {/* Menu Mode Mobile */}
        {modeMobile && (
          <div>
            <div>
              <Search />
              <Link href="/carrito">
                <CartItem>
                  <ShoppingCart size={18} />
                  <span className="item-cart">{itemsCart}</span>
                </CartItem>
              </Link>
              {!auth ? (
                <Link href="/iniciar-sesion" passHref>
                  <a>
                    <User size={18} />
                  </a>
                </Link>
              ) : (
                <div>
                  <span className="user" arial-label="User">
                    {user && user.user.name}
                  </span>
                  <span
                    role="button"
                    className="logout"
                    onClick={() => logOut()}
                  >
                    {' '}
                    Cerrar Sesion
                  </span>
                </div>
              )}
            </div>
            <BurguerMenu
              menuMobile={menuMobile}
              toggleMenuMobile={toggleMenuMobile}
            />
          </div>
        )}
        {menuMobile && (
          <MenuMobile>
            <Items />
          </MenuMobile>
        )}
      </Container>
    </Nav>
  );
};

export default NavBar;