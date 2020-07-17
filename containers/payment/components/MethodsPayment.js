import React, { useState } from 'react';
import Subtitle from './Subtitle';
import { InfoWrapper, MethodsPaymentStyle, Error } from '../styled';
import Button from '../../../common/Button';

const MethodsPayment = ({ step, nextStep, method, setMethod }) => {
  const [showModificar, setShowModificar] = useState(false);
  const [error, setError] = useState(null);

  function next() {
    if(!method) {
      setError('Elija un metodo de pago')
      return;
    }
    nextStep(4);
    setShowModificar(true);
    setError('');
  }
  return (
    <div>
      <Subtitle
        step="3"
        subtitle="Medios de pago"
        showModificar={showModificar}
        nextStep={nextStep}
        setShowModificar={setShowModificar}
      />
      {showModificar && step !== 3 && (
        <p style={pStyle}>Pagar a travez de {method}</p>
      )}
      {step === 3 && (
        <InfoWrapper>
          <MethodsPaymentStyle>
            <input
              type="radio"
              onChange={(e) => setMethod(e.target.value)}
              value="MP"
              id="MP"
              name="methodPaymenyt"
            />
            <label htmlFor="MP">Mercado Pago</label>
          </MethodsPaymentStyle>
          <MethodsPaymentStyle>
            <input
              type="radio"
              value="whatsapp"
              onChange={(e) => setMethod(e.target.value)}
              id="whatsapp"
              name="methodPaymenyt"
            />
            <label htmlFor="other">Whatsapp</label>
          </MethodsPaymentStyle>
          {error && <Error>{error}</Error>}
          <Button
            size="block"
            text="Siguente"
            color="secondary"
            onClick={next}
          />
        </InfoWrapper>
      )}
    </div>
  );
};

const pStyle = {
  padding: '1rem'
}

export default MethodsPayment;
