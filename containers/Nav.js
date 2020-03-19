import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Container } from '../styled/index';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';

import Button from '../utils/Button';

const Nav = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  background: ${props => props.theme.color.primary};
  color: ${props => props.theme.color.dark};
  padding: 0.4rem 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, .8);
  z-index: 100;

  @media (max-width: 900px) {
    font-size: 14px;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
      color: ${({ theme }) => theme.color.dark};
      margin: 0 .7rem;
    }
  }
`;

const Links = styled.ul`
  display: flex;

  li {
    margin-left: 1rem;
  }
  a {
    background: transparent;
    color: #000;
    font-size: 0.7em;
    font-weight: bold;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
    transition: color 3s ease;

    &:hover {
      color: red;
      border-top: 2px solid red;
    }
  }
`;

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 1.4em;
  letter-spacing: 0.5em;
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
            <FaUser />
          </div>
        </Links>
      </Container>
    </Nav>
  );
};

export default NavBar;
