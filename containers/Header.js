import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';
import Button from '../utils/Button';
import { Container } from '../styled/index';

const animate = keyframes`
  from {
    opacity: 0;
    transform: translate(-40%, 0); 
  }
  to {
    opacity:1;
    transform: translate(0); 
  }
`;

const WrapperHeader = styled.header`
  height: 65vh;
  width: 100%;
  position: relative;
  background: linear-gradient(to left, #333, #000, #000);

  @media (max-width: 900px) {
    font-size: 12px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('./cap-girl-9.jpg');
    background-repeat: no-repeat;
    background-position: 0;
    background-size: cover;
    opacity: 0.3;
    z-index: 2;
  }
`;

const Content = styled.section`
  position: absolute;
  top: 40%;
  left: 5%;
  z-index: 10;

  h1 {
    color: ${props => props.theme.color.primary};
    border-left: 5px solid ${props => props.theme.color.dark};
    padding-left: 0.5rem;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 600;
    /* letter-spacing: 2px; */
    animation: ${animate} 0.8s ease-in;
  }

  p {
    font-size: 0.9em;
    color: #eee;
    margin-left: 1rem;
    margin-top: -1rem;
    margin-bottom: 1.5rem;
    animation: ${animate} 0.8s ease-out;
  }
`;

const Header = () => {
  return (
    <WrapperHeader>
      <Container>
        <Content>
          <h1>CAP's Arg</h1>
          <p>Calidad en los productos</p>
          <Button text="COMPRAR " color="primary">
            <FaArrowRight size=".6rem" />
          </Button>
        </Content>
      </Container>
    </WrapperHeader>
  );
};

export default Header;
