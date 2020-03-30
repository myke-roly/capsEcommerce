import React, { useState } from 'react';
import styled from 'styled-components';

const Menu = styled.div`
  width: 20px;
  height: 30px;
  cursor: pointer;
  position: absolute;
  top: 0.4rem;
  right: 5%;

  span {
    width: 15px;
    position: absolute;
    height: ${props => (props.modeMobile ? '0px' : '.135rem')};
    background: ${({ theme }) => theme.color.dark};
    transition: all 0.3s ease;
    border-radius: 50px;

    &::before {
      content: '';
      position: absolute;
      top: ${props => (props.modeMobile ? 0 : '-.40rem')};
      height: 0.135rem;
      background: inherit;
      width: 20px;
      transform: ${props => (props.modeMobile ? 'rotate(-225deg)' : 0)};
      transition: all 0.3s ease;
      border-radius: 50px;
    }

    &::after {
      content: '';
      position: absolute;
      top: ${props => (props.modeMobile ? 0 : '.35rem')};
      width: 20px;
      height: 0.135rem;
      background: inherit;
      transform: ${props => (props.modeMobile ? 'rotate(45deg)' : 0)};
      transition: all 0.3s ease;
      border-radius: 50px;
    }
  }
`;

export default function BurguerMenu({ modeMobile, handleModeMobile }) {
  return (
    <Menu modeMobile={modeMobile} onClick={() => handleModeMobile()} role="button">
      <span></span>
    </Menu>
  );
}