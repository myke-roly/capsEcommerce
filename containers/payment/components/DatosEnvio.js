import React from 'react';
import Subtitle from './Subtitle';
import { Input, InfoWrapper, DetailAddress } from '../styled';
import Button from '../../../common/Button';

const DatosEnvio = () => {
  return (
    <div>
      <Subtitle option="2" subtitle="Datos de envio y entrega" />
      <InfoWrapper>
        <Input>
          <label htmlFor="C">Código Postal *:</label>
          <input type="text" name="CP" id="CP" />
        </Input>
        <Input>
          <label htmlFor="address">Dirección de Envio *:</label>
          <input type="text" name="address" id="address" />
        </Input>
        <DetailAddress>
          <Input className="details-address">
            <label htmlFor="num">Número: *</label>
            <input type="text" placeholder="11" name="code" className="code" />
          </Input>
          <Input>
            <label htmlFor="num">Piso/Dep: *</label>
            <input type="text" name="number-phone" id="number-phone" className="number" />
          </Input>
        </DetailAddress>
        <select name="city" id="cicty">
          <option value="">Ciudad</option>
        </select>
        <select name="provincia" id="provincia">
          <option value="">Provincia</option>
        </select>

        {/* elegir forma de envio */}
        <p>Elegir un forma de entrega</p>
        <Button size="block" text="Siguiente" color="secondary" />
      </InfoWrapper>
    </div>
  );
};

export default DatosEnvio;