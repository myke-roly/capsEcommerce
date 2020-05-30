import React from 'react';
import { MessageError, Inputs } from './styled';
import Button from '../../common/Button';
import Title from '../../common/Title';
import InputPassword from '../../common/InputPassword';
import useValidateInputs from '../../hooks/useValidateInputs';
import { validateSignUp } from '../../libs/validate';

const Register = ({ messageAlert, newRegister}) => {
 let initialState = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false,
  };
  
  const { state, errors, handleChange, handleSubmit } = useValidateInputs(initialState, validateSignUp, newRegister);

  return (
    <form onSubmit={handleSubmit}>
      <Title title="Registrarme" />
      <Inputs>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          placeholder="Nombre"
          id="name"
          name="name"
          value={state.name}
          onChange={handleChange}
        />
        {errors.name && <MessageError>{errors.name}</MessageError>}
      </Inputs>
      <Inputs>
        <label htmlFor="lastName">Apellido:</label>
        <input
          type="text"
          placeholder="Apellido"
          id="lastName"
          name="lastName"
          value={state.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <MessageError>{errors.lastName}</MessageError>}
      </Inputs>
      <Inputs>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="@"
          id="email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        {errors.email && <MessageError>{errors.email}</MessageError>}
      </Inputs>
      <Inputs>
        <label htmlFor="password">Contrasena:</label>
        <InputPassword 
          id="password"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
        {errors.password && <MessageError>{errors.password}</MessageError>}
      </Inputs>
      <Inputs>
        <label htmlFor="password-confirm">Confirmar Contrasena:</label>
        <input
          type="password"
          placeholder="********"
          id="password-confirm"
          name="confirmPassword"
          value={state.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && <MessageError>{errors.confirmPassword}</MessageError>}
      </Inputs>
      <Inputs>
        <label htmlFor="terms">Acepto los terminos y condiciones</label>
        <input
          type="checkbox"
          name="terms"
          id="terms"
          onChange={handleChange}
          checked={state.terms}
        />
      </Inputs>
      <Button 
        text="Registrarme" 
        color="dark" 
        type="submit"
        disabled={Object.values(state).includes('')}
        />
      {messageAlert && <MessageError>{messageAlert}</MessageError>}
    </form>
  );
};

export default Register;
