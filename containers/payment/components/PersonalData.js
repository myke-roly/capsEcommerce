import React from 'react';
import Subtitle from './Subtitle';
import { Input, InfoWrapper } from '../styled';
import Button from '../../../common/Button';

const PersonalData = () => {
  return (
    <div>
      <Subtitle option="1" subtitle="Datos Personales" />
      <InfoWrapper>
      <p>Solicitamos solo la información necesaria para poder realizar la compra</p>
        <Input>
          <label htmlFor="email">Correo electrónico *:</label>
          <input type="text" name="email" id="email" />
        </Input>
        <Input>
          <label htmlFor="name">Nombre *:</label>
          <input type="text" name="name" id="name" />
        </Input>
        <Input>
          <label htmlFor="last-name">Apellido(s) *:</label>
          <input type="text" name="last-name" id="last-name" />
        </Input>
        <Input>
          <label htmlFor="dni">DNI (opcional):</label>
          <input type="text" name="dni" id="dni" />
        </Input>
        <Input>
          <label htmlFor="number-phone">Teléfono/Móvil *:</label>
          <div className="phone">
            <input type="text" placeholder="11" name="code" className="code" />
            <input type="text" name="number-phone" id="number-phone" className="number" />
          </div>
        </Input>
        <Button size="block" text="Siguiente" color="secondary" />
      </InfoWrapper>
    </div>
  );
};

export default PersonalData;
