import React from 'react';
import { Logo } from '../../common/Logo';
import { Header } from './styled';
import Subtitle from './components/Subtitle';
import Title from '../../common/Title';
import { Container } from '../../common/Container';
import PersonalData from './components/PersonalData';
import DatosEnvio from './components/DatosEnvio';
import MethodsPayment from './components/MethodsPayment';
import Button from '../../common/Button';

const PaymentWrapper = () => {
  return (
    <>
      <Header><Logo /></Header>
      <Container>
        <Title title="Finalizar compra" />
        <PersonalData />
        <DatosEnvio />
        <MethodsPayment />
        
        {/* Mostrar el boton si todos los datos son correctos */}
        {false && <Button text="Finalizar Compra" size="block" color="dark" />}
      </Container>
    </>
  )
}

export default PaymentWrapper;