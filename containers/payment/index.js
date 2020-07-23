import React, { useState } from 'react';
import { Logo } from '../../common/Logo';
import { Header, PaymentWrapperStyles } from './styled';
import Title from '../../common/Title';
import { Container } from '../../common/Container';
import PersonalData from './components/PersonalData';
import DatosEnvio from './components/DatosEnvio';
import MethodsPayment from './components/MethodsPayment';
import Button from '../../common/Button';

const PaymentWrapper = () => {
  // CAPTURAR TODOS LOS DATOS DE DE LA COMPRA
  const [step, setStep] = useState(1);
  const [method, setMethod] = useState(null);
  const [modificar, setModificar] = useState(false);
  
  function nextStep(step) {
    setStep(step);
  }

  function sendPayment() {
    // si el metodo de pago es MP redireccionar a mercado pado payment

    // si el metodo es whatsapp redireccionar al numero de whatsapp del venderdor
  }

  return (
    <PaymentWrapperStyles>
      <Header>
        <Logo />
      </Header>
      <Container>
        <Title title="Finalizar compra" />
        <PersonalData step={step} nextStep={nextStep} modificar={modificar} setModificar={setModificar} />
        <DatosEnvio step={step} nextStep={nextStep} />
        <MethodsPayment
          step={step}
          nextStep={nextStep}
          method={method}
          setMethod={setMethod}
        />

        {/* Mostrar el boton si todos los datos son correctos */}
        {step === 4 && (
          <Button 
            text="FINALIZAR LA COMPRA" 
            size="block"
            color="secondary"
          />
        )}
      </Container>
    </PaymentWrapperStyles>
  );
};

export default PaymentWrapper;
