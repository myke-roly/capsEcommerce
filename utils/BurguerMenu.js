import React, { useState } from 'react';
import styled from 'styled-components';

const Menu = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
  position: absolute;
  top: 0.4rem;
  right: 5%;

  span {
    width: 20px;
    position: absolute;
    height: ${props => (props.modeMobile ? '0px' : '.2rem')};
    background: ${({ theme }) => theme.color.dark};
    transition: all 0.3s ease;
    border-radius: 50px;

    &::before {
      content: '';
      position: absolute;
      top: ${props => (props.modeMobile ? 0 : '-.45rem')};
      height: 0.2rem;
      background: inherit;
      width: 30px;
      transform: ${props => (props.modeMobile ? 'rotate(-225deg)' : 0)};
      transition: all 0.3s ease;
      border-radius: 50px;
    }

    &::after {
      content: '';
      position: absolute;
      top: ${props => (props.modeMobile ? 0 : '.45rem')};
      width: 30px;
      height: 0.2rem;
      background: inherit;
      transform: ${props => (props.modeMobile ? 'rotate(45deg)' : 0)};
      transition: all 0.3s ease;
      border-radius: 50px;
    }
  }
`;

export default function BurguerMenu({ modeMobile, handleModeMobile }) {
  return (
    <Menu modeMobile={modeMobile} onClick={() => handleModeMobile()}>
      <span></span>
    </Menu>
  );
}