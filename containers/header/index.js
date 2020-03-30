import React from 'react';
import { FaArrowRight, FaBluetooth } from 'react-icons/fa';
import { Content, WrapperHeader } from './styled';
import Button from '../../utils/Button';
import { Container } from '../../styled/index';

const Header = () => {
  return (
    <WrapperHeader>
      <Container>
        <Content>
          <h1>CAPs <span>argentina</span><p>Calidad en nuestros productos</p></h1>
          <Button text="Comprar " color="primary">
            <FaArrowRight size=".6rem" />
          </Button>
        </Content>
      </Container>
    </WrapperHeader>
  );
};

export default Header;
