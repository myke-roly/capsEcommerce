import React, { useState } from 'react';
import Subtitle from './Subtitle';
import { InfoWrapper } from '../styled';
import Button from '../../../common/Button';

const MethodsPayment = ({ step, nextStep }) => {
  const [showModificar, setShowModificar] = useState(false);

  function next() {
    nextStep(4);
    setShowModificar(true);
  }
  return (
    <div>
      <Subtitle step="3" 
        subtitle="Medios de pago" 
        showModificar={showModificar}
        nextStep={nextStep}
        setShowModificar={setShowModificar}
      />
      {step === 3 && 
        <InfoWrapper>
          <p>Methodos de pago</p>
          <Button size="block" text="Pagar" color="secondary" onClick={next} />
        </InfoWrapper>
      }
    </div>
  );
};

export default MethodsPayment;