import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container } from '../../styled/index';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import BurguerMenu from '../../utils/BurguerMenu';
import { Nav, Title, Links, CartItem } from './styled';

const NavBar = () => {
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

  const [mobile, setMobile] = useState(false);
  const [modeMobile, setModeMobie] = useState(false);

  useEffect(() => {
    setMobile(window.innerWidth < 900 ? true : false);
    function rezise(e) {
      setMobile(e.target.innerWidth < 900 ? true : false);
    }

    window.addEventListener('resize', rezise);
    return () => window.removeEventListener('resize', rezise);
  }, []);

  return (
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
          handleModeMobile={() => setModeMobie(!modeMobile)}
        />
      )}
      {modeMobile && <Item />}
    </Nav>
  );
};

export default NavBar;
