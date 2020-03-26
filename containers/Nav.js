import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Container } from '../styled/index';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import BurguerMenu from '../utils/BurguerMenu';

import Button from '../utils/Button';

const Nav = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background: ${props => props.theme.color.primary};
  color: ${props => props.theme.color.dark};
  padding: 0.6rem 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.55);
  z-index: 100;
  /* position: relative; */

  @media (max-width: 900px) {
    font-size: 14px;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
      color: ${({ theme }) => theme.color.dark};
      margin: 0 0.7rem;
    }
  }
`;

const Links = styled.ul`
  display: flex;

  @media (max-width: 900px) {
    display: none;
  }

  li {
    margin-left: 1rem;

    a {
      background: transparent;
      color: #000;
      font-size: 0.7em;
      font-weight: bold;
      text-transform: uppercase;
      padding: 0.5rem 1rem;
      transition: color 3s ease;

      &:hover {
        color: ${({ theme }) => theme.color.dark};
        border-top: 2px solid ${({ theme }) => theme.color.dark};
      }

      &.active {
        background: red;
        color: white;
      }
    }
  }
`;

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 1.2em;
  letter-spacing: 0.3rem;

  small {
    font-size: 0.7em;
  }
`;

const NavBar = () => {
  const links = [
    { id: 0, title: 'inicio', path: '/' },
    { id: 1, title: 'productos', path: '/productos' },
    { id: 2, title: 'sobre nosotros', path: '/sobre-nosotros' },
    { id: 3, title: 'contacto', path: '/contacto' }
  ];

  const Item = () =>
    links.map(link => (
      <li key={link.id}>
        <Link href={link.path}>
          <a>{link.title}</a>
        </Link>
      </li>
    ));

  const [mobile, setMobile] = useState(false);
  const [modeMobile, setModeMobie] = useState(false);

  useEffect(() => {
    setMobile(window.innerWidth < 900 ? true : false);
    function func(e) {
      setMobile(e.target.innerWidth < 900 ? true : false);
    }

    window.addEventListener('resize', func);
    return () => window.removeEventListener('resize', func);
  }, []);

  return (
    <Nav>
      <Container>
        <Title>
          Caps <small>ooo</small>
        </Title>
        <Links>
          <Item />
          <div>
            <FaSearch />
            <FaShoppingCart />
            <Link href="/login">
              <a>
                <FaUser />{' '}
              </a>
            </Link>
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
