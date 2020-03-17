import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import {Button} from '../styles/index';

const HeaderWrapper = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.dark};
  display: flex;
  justify-content: space-around;
  align-items: center;

  ul {
    display: flex;
  }
`;

const Item = styled.li`
  margin-left: 1rem;
  a {
    background: transparent;
    color: #000;
    font-size: .8rem;
    text-transform: uppercase;
  }
`;

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 1.4rem;
  letter-spacing: 5px;
`

const Header = () => {
  const links = [
    { id: 0, title: 'inicio', path: '/' },
    { id: 1, title: 'productos', path: '/productos' },
    { id: 2, title: 'sobre nosotros', path: '/sobre-nosotros' },
    { id: 3, title: 'contacto', path: '/contacto' },
    { id: 4, title: 'iniciar session', path: '/login' }
  ];

  return (
    <HeaderWrapper>
      <Title>Caps</Title>
      <ul>
        {links.map(link => (
          <Item>
            <Link href={link.path} key={link.id}>
              <Button className="btn">{link.title}</Button>
            </Link>
          </Item>
        ))}
      </ul>
    </HeaderWrapper>
  );
};

export default Header;
