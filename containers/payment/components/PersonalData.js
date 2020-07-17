import React, { useState } from 'react';
import Subtitle from './Subtitle';
import { Input, InfoWrapper, Error } from '../styled';
import Button from '../../../common/Button';
import useValidateInputs from '../../../hooks/useValidateInputs';
import { validatePersonalData } from '../../../libs/validate';

const PersonalData = ({ step, nextStep }) => {
  const initialvalues = {
    email: '',
    name: '',
    lastName: '',
    dni: '',
    numberPhone: '',
  };

  const {
    state,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useValidateInputs(initialvalues, validatePersonalData, next);

  const [showModificar, setShowModificar] = useState(false);

  function next() {
    nextStep(2);
    setShowModificar(true);
  }

  return (
    <div>
      <Subtitle
        step="1"
        subtitle="Datos Personales"
        showModificar={showModificar}
        nextStep={nextStep}
        setShowModificar={setShowModificar}
      />
      {showModificar && (
        <div>
          <p>{state.email}</p>
          <p>{state.name}</p>
          <p>{state.lastName}</p>
          <p>{state.dni}</p>
          <p>{state.numberPhone}</p>
        </div>
      )}
      {step === 1 && (
        <InfoWrapper>
          <p>
            Solicitamos solo la información necesaria para poder realizar la
            compra
          </p>
          <Input>
            <label htmlFor="email">Correo electrónico *:</label>
            <input
              type="text"
              name="email"
              id="email"
              value={state.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && <Error>{errors.email}</Error>}
          </Input>
          <Input>
            <label htmlFor="name">Nombre *:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={state.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && <Error>{errors.name}</Error>}
          </Input>
          <Input>
            <label htmlFor="last-name">Apellido(s) *:</label>
            <input
              type="text"
              name="lastName"
              id="last-name"
              value={state.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.lastName && <Error>{errors.lastName}</Error>}
          </Input>
          <Input>
            <label htmlFor="dni">DNI *:</label>
            <input
              type="number"
              name="dni"
              id="dni"
              value={state.dni}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.dni && <Error>{errors.dni}</Error>}
          </Input>
          <Input>
            <label htmlFor="number-phone">Teléfono/Móvil *:</label>
            <div className="phone">
              <input
                type="number"
                name="numberPhone"
                id="number-phone"
                className="number"
                placeholder="11 - 22334455"
                value={state.numberPhone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            {errors.numberPhone && <Error>{errors.numberPhone}</Error>}
          </Input>
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

export default PersonalData;
