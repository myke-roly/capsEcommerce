import React, { useState } from 'react';
import Subtitle from './Subtitle';
import { Input, InfoWrapper, Flex } from '../styled';
import Button from '../../../common/Button';
import useValidateInputs from '../../../hooks/useValidateInputs';
import { validateDatosEnvio } from '../../../libs/validate';

const DatosEnvio = ({ step, nextStep }) => {
  const initialState = {
    CP: '',
    address: '',
    detailAddress: '',
    number: 0,
    pisoDep: '',
    city: '',
    provincia: '',
  };

  const {
    state,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useValidateInputs(initialState, validateDatosEnvio, next);
  console.log(errors);

  const [showModificar, setShowModificar] = useState(false);

  function next() {
    nextStep(3);
    setShowModificar(true);
  }
  return (
    <div>
      <Subtitle
        step="2"
        subtitle="Datos de envio y entrega"
        showModificar={showModificar}
        nextStep={nextStep}
        setShowModificar={setShowModificar}
      />
      {showModificar && (
        <div>
          <p>{state.CP}</p>
          <p>{state.address}</p>
          <p>{state.number}</p>
          <p>{state.pisoDep}</p>
          <p>{state.detailAddress}</p>
          <p>{state.city}</p>
          <p>{state.provincia}</p>
        </div>
      )}
      {step === 2 && (
        <InfoWrapper>
          <Input>
            <label htmlFor="C">Código Postal *:</label>
            <input
              value={state.CP}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              name="CP"
              id="CP"
            />
          </Input>
          <Input>
            <label htmlFor="address">Dirección de Envio *:</label>
            <input
              value={state.address}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              name="address"
              id="address"
            />
          </Input>
          <Input>
            <label htmlFor="detail-addrress">Entre calles :</label>
            <input
              value={state.detailAddress}
              onChange={handleChange}
              type="text"
              name="detailAddress"
              id="detail-addrress"
            />
          </Input>
          <Flex>
            <Input>
              <label htmlFor="num">Número: *</label>
              <input
                value={state.number}
                onChange={handleChange}
                onBlur={handleBlur}
                type="number"
                placeholder="1234"
                name="number"
                className="number"
              />
            </Input>
            <Input>
              <label htmlFor="number">Piso/Dep :</label>
              <input
                value={state.pisoDep}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                name="pisoDep"
                id="piso-dep"
                className="piso-dep"
              />
            </Input>
          </Flex>
          <Flex>
            <select
              value={state.city}
              onChange={handleChange}
              style={SelectStyle}
              name="city"
              id="city"
            >
              <option value="BA">Buenos Aires</option>
              <option value="RO">Rosario</option>
              <option value="CB">Cordoba</option>
            </select>
            <select
              value={state.provincia}
              onChange={handleChange}
              style={SelectStyle}
              name="provincia"
              id="provincia"
            >
              <option value="BA">Buenos Aires</option>
              <option value="CABA">Ciudad autonoma de Buenos aires</option>
              <option value="CB">Cordoba</option>
            </select>
          </Flex>

          {/* elegir forma de envio */}
          <p>Elegir un forma de entrega</p>
          <Button
            size="block"
            text="Siguiente"
            color="secondary"
            onClick={handleSubmit}
          />
        </InfoWrapper>
      )}
    </div>
  );
};

const SelectStyle = {
  display: 'block',
  padding: '.5rem 1rem',
};

export default DatosEnvio;
