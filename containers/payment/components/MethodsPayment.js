import React from 'react';
import Subtitle from './Subtitle';
import { InfoWrapper } from '../styled';
import Button from '../../../common/Button';

const MethodsPayment = () => {
  return (
    <div>
      <Subtitle option="3" subtitle="Medios de pago" />
      <InfoWrapper>
        <p>Methodos de pago</p>
        <Button size="block" text="Pagar" color="secondary" />
      </InfoWrapper>
    </div>
  );
};

export default MethodsPayment;