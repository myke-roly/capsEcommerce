import React, { useState } from 'react';
import styled from 'styled-components';

const Menu = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
  position: absolute;
  top: 2vh;
  right: 5%;

  span {
    width: 25px;
    position: absolute;
    top: 1vh;
    height: ${props => (props.modeMobile ? '0px' : '3px')};
    background: ${({ theme }) => theme.color.dark};
    transition: all 0.3s ease;

    @media (min-width: 900px) {
      display: none;
    }

    &::before {
      content: '';
      position: absolute;
      top: ${props => (props.modeMobile ? 0 : '-1.2vh')};
      height: 3px;
      background: inherit;
      width: ${props => (props.modeMobile ? '30px' : '30px')};
      transform: ${props => (props.modeMobile ? 'rotate(-225deg)' : 0)};
      transition: all 0.3s ease;
    }

    &::after {
      content: '';
      position: absolute;
      top: ${props => (props.modeMobile ? 0 : '1.2vh')};
      width: ${props => (props.modeMobile ? '30px' : '15px')};
      height: 3px;
      background: inherit;
      transform: ${props => (props.modeMobile ? 'rotate(45deg)' : 0)};
      transition: all 0.3s ease;
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
