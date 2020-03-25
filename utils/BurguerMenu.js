import React, { useState } from 'react';
import styled from 'styled-components';

const Menu = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
  position: absolute;
  top: .4rem;
  right: 5%;

  span {
    width: 25px;
    position: absolute;
    height: ${props => (props.modeMobile ? '0px' : '.25rem')};
    background: ${({ theme }) => theme.color.dark};
    transition: all 0.3s ease;
    border-radius: 50px;

    @media (min-width: 900px) {
      display: none;
    }

    &::before {
      content: '';
      position: absolute;
      top: ${props => (props.modeMobile ? 0 : '-.45rem')};
      height: .25rem;
      background: inherit;
      width: ${props => (props.modeMobile ? '30px' : '30px')};
      transform: ${props => (props.modeMobile ? 'rotate(-225deg)' : 0)};
      transition: all 0.3s ease;
      border-radius: 50px;
    }

    &::after {
      content: '';
      position: absolute;
      top: ${props => (props.modeMobile ? 0 : '.4rem')};
      width: ${props => (props.modeMobile ? '30px' : '15px')};
      height: .25rem;
      background: inherit;
      transform: ${props => (props.modeMobile ? 'rotate(45deg)' : 0)};
      transition: all 0.3s ease;
      border-radius: 50px;
    }
  }
`;

const BurguerMenu = ({ modeMobile, handleModeMobile }) => {
  return (
    <Menu modeMobile={modeMobile} onClick={() => handleModeMobile()}>
      <span></span>
    </Menu>
  );
};
export default BurguerMenu;
