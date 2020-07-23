import React, { useState } from 'react';
import Subtitle from './Subtitle';
import { Input, InfoWrapper, Flex, DataStyles, Error } from '../styled';
import Button from '../../../common/Button';
import useValidateInputs from '../../../hooks/useValidateInputs';
import { validateDatosEnvio } from '../../../libs/validate';

const DatosEnvio = ({ step, nextStep }) => {
  const initialState = {
    CP: '',
    address: '',
    detailAddress: '',
    number: null,
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
      {showModificar && step !== 2 && (
        <DataStyles>
          <p>Código Postal: <b>{state.CP}</b></p>
          <p>Dirección de envio: <b>{state.address}</b></p>
          <p>Número de casa: <b>{state.number}</b></p>
          <p>Entre calles: <b>{state.detailAddress}</b></p>
          <p>Piso/Depto: <b>{state.pisoDep}</b></p>
          <p>Ciudad: <b>{state.city}</b></p>
          <p>Província: <b>{state.provincia}</b></p>
        </DataStyles>
      )}
      {step === 2 && (
        <InfoWrapper>
          <Input>
            <label htmlFor="C">Código Postal *:</label>
            <input
              className="CP"
              value={state.CP}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              name="CP"
              id="CP"
            />
              {errors.CP && <Error>{errors.CP}</Error>}
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
            {errors.address && <Error>{errors.address}</Error>}
          </Input>
          <Input>
            <label htmlFor="detail-addrress">Entre calles <i>(Opcional)</i> :</label>
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
              <label htmlFor="number">Número: *</label>
              <input
                value={state.number}
                onChange={handleChange}
                onBlur={handleBlur}
                type="number"
                placeholder="1234"
                name="number"
                className="number"
                id="number"
              />
              {errors.number && <Error>{errors.number}</Error>}
            </Input>
            <Input>
              <label htmlFor="piso-dep">Piso/Dep :</label>
              <input
                value={state.pisoDep}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                name="pisoDep"
                id="piso-dep"
                className="piso-dep"
              />
              {errors.pisoDep && <Error>{errors.pisoDep}</Error>}
            </Input>
          </Flex>
          <Flex>
           <div>
            <select
                value={state.city}
                onChange={handleChange}
                style={SelectStyle}
                name="city"
                id="city"
              >
                <option value="">Ciudad</option>
                <option value="BA">Buenos Aires</option>
                <option value="RO">Rosario</option>
                <option value="CB">Cordoba</option>
              </select>
              {errors.city && <Error>{errors.city}</Error>}
           </div>
           <div>
            <select
              value={state.provincia}
              onChange={handleChange}
              style={SelectStyle}
              name="provincia"
              id="provincia"
            >
              <option value="">Província</option>
              <option value="BA">Buenos Aires</option>
              <option value="CABA">Ciudad autonoma de Buenos aires</option>
              <option value="CB">Cordoba</option>
            </select>
            {errors.provincia && <Error>{errors.provincia}</Error>}
           </div>
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
