import React, { useState } from 'react';
import Subtitle from './Subtitle';
import { InfoWrapper, MethodsPaymentStyle, Error, DataStyles } from '../styled';
import Button from '../../../common/Button';
import { CreditCard } from 'react-feather';

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
    <MethodsPaymentStyle>
      <Subtitle
        step="3"
        subtitle="Medios de pago"
        showModificar={showModificar}
        nextStep={nextStep}
        setShowModificar={setShowModificar}
        Icon={CreditCard}
      />
      {showModificar && step !== 3 && (
        <DataStyles>
          <p> Metodo de pago elegido: <b>{method.toUpperCase()}</b></p>
          <img className={method} src={method+'.png'} />
        </DataStyles>
      )}
      {step === 3 && (
        <InfoWrapper>
          <section>
            <input
              type="radio"
              onChange={(e) => setMethod(e.target.value)}
              value="mercadoPago"
              id="mercadoPago"
              name="methodPaymenyt"
            />
            <label htmlFor="mercadoPago">Mercado Pago</label>
            <img src="./mercadoPago.png" className="mercadoPago" alt="mercado pago logo" />
          </section>
          <section>
            <input
              type="radio"
              value="whatsapp"
              onChange={(e) => setMethod(e.target.value)}
              id="whatsapp"
              name="methodPaymenyt"
            />
            <label htmlFor="whatsapp">Whatsapp</label>
            <img src="./whatsapp.png" className="whatsapp" alt="whatsapp logo" />
          </section>
          {error && <Error>{error}</Error>}
          <Button
            size="block"
            text="Siguente"
            color="secondary"
            onClick={next}
          />
        </InfoWrapper>
      )}
    </MethodsPaymentStyle>
  );
};

export default MethodsPayment;
