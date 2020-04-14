import React, { useState } from 'react';
import styled from 'styled-components';

const Menu = styled.div`
  width: 20px;
  height: 30px;
  cursor: pointer;
  position: relative;
  margin-left: 1rem;

  span {
    width: 15px;
    position: absolute;
    height: ${props => (props.menuBurguer ? '0px' : '.135rem')};
    background: ${({ theme }) => theme.color.dark};
    transition: all 0.3s ease;
    border-radius: 50px;

    &::before {
      content: '';
      position: absolute;
      top: ${props => (props.menuBurguer ? 0 : '-.43rem')};
      height: 0.135rem;
      background: inherit;
      width: 20px;
      transform: ${props => (props.menuBurguer ? 'rotate(-225deg)' : 0)};
      transition: all 0.3s ease;
      border-radius: 50px;
    }

    &::after {
      content: '';
      position: absolute;
      top: ${props => (props.menuBurguer ? 0 : '.45rem')};
      width: 20px;
      height: 0.135rem;
      background: inherit;
      transform: ${props => (props.menuBurguer ? 'rotate(45deg)' : 0)};
      transition: all 0.3s ease;
      border-radius: 50px;
    }
  }
`;

export default function BurguerMenu({ menuBurguer, changeMenuBurguer }) {
  return (
    <Menu
      menuBurguer={menuBurguer}
      onClick={() => changeMenuBurguer()}
      role="button"
    >
      <span></span>
    </Menu>
  );
}
