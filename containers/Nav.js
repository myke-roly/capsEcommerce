import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Container } from '../styled/index';
import { FaSearch, FaUser } from 'react-icons/fa';

import Button from '../utils/Button';

const Nav = styled.nav`
  width: 100%;
  background: ${props => props.theme.color.primary};
  color: ${props => props.theme.color.dark};
  padding: 1rem 0;
  @media (max-width: 720px) {
    font-size: 14px;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
      color: ${({ theme }) => theme.color.dark};
      margin: 0 1.5rem;
      /* font-size: .8rem; */
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
    font-size: 0.8rem;
    text-transform: uppercase;
    padding: 0.5rem 1rem;

    &:hover {
      color: red;
    }
  }
`;

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 1.4rem;
  letter-spacing: 5px;
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
        <Title>Caps <small>ooo</small></Title>
        <Links>
          <Item />
        <div>
          <FaSearch />
          <FaUser />
        </div>
        </Links>
      </Container>
    </Nav>
  );
};

export default NavBar;
