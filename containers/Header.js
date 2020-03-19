import React from 'react';
import styled from 'styled-components';
import Button from '../utils/Button';
import { Container } from '../styled/index';

const WrapperHeader = styled.header`
  height: 90vh;
  width: 100%;
  position: relative;
  background-image: url('./cap-girl-9.jpg');
  background-repeat: no-repeat;
  background-position: 0 -15vh;
  background-size: cover;

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, black, #810);
    opacity: .7;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
`;

const Content = styled.section`
  position: absolute;
  top: 50%;
  right: 5%;
  z-index: 10;

  h1 {
    color: #fff;
    text-transform: uppercase;
    font-size: 5em; 
    letter-spacing: 2.5px;
  }
   
  small {
    margin-left: 2rem;
    color: #eee;
  }
`;

const Header = () => {
  return (
    <WrapperHeader>
      <Container>
        <Content>
          <h1>CAP's Arg</h1>
          <Button text="COMPRAR" color="dark" />
          <small>El estilo lo llevas dentro.</small>
        </Content>
      </Container>
    </WrapperHeader>
  );
};

export default Header;
