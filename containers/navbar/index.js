import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import { User, ShoppingCart } from 'react-feather';
import { Nav, Title, Links, CartItem } from './styled';
import { Container } from '../../utils/Container';
import MenuMobile from '../../utils/MenuMobile';
import BurguerMenu from '../../utils/BurguerMenu';
import { ContextAuth } from '../../context/AuthContext';
import { ContextMobile } from '../../context/MobileContext';
import Search from '../../components/searchInput';
import Cookie from 'js-cookie'

const NavBar = () => {
  const contextMobile = useContext(ContextMobile);
  const { modeMobile } = contextMobile;

  const contextAuth = useContext(ContextAuth);
  const { getUser, user, auth, logOut } = contextAuth;

  const [menuBurguer, setMenuBurguer] = useState(false);
  const [item, setItem] = useState(0);

  useEffect(() => {
    getUser();
    if(Cookie.getJSON('IDItem')) {
      setItem(Cookie.getJSON('IDItem').length);
    }
  }, []);

  const links = [
    { id: 1, title: 'productos', path: '/productos' },
    { id: 2, title: 'sobre nosotros', path: '/sobre-nosotros' },
    { id: 3, title: 'contacto', path: '/contacto' },
  ];

  const Items = () => {
    return links.map((link) => (
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
          <Link href="/"><a>Caps <small>.:: o</small></a></Link>
        </Title>
        {!modeMobile && (
          <Links>
            <Search />
            <Items />
            <div>
                <Link href="/carrito">
                  <CartItem>
                    <ShoppingCart size={18} />
                    <span className="item-cart">{item}</span>
                  </CartItem>
                </Link>
              {!auth ? (
                <Link href="/iniciar-sesion" passHref>
                  <a><User size={18} /></a>
                </Link>
              ) : (
                <div>
                  <span className="user" arial-label="User">{user && user.user.name}</span>
                  <span role="button" className="logout" onClick={() => logOut()}> Cerrar Sesion</span>
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
                  <span className="item-cart">{item}</span>
                </CartItem>
              </Link>
              {!auth ? (
                <Link href="/iniciar-sesion" passHref>
                  <a><User size={18} /></a>
                </Link>
              ) : (
                <div>
                  <span className="user" arial-label="User" >{user && user.user.name}</span>
                  <span role="button" className="logout" onClick={() => logOut()}> Cerrar Sesion</span>
                </div>
              )}
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
