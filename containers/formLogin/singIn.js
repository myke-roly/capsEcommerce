import React, { useContext } from 'react';
import { Forms, Inputs } from './styled';
import Button from '../../utils/Button';
import Title from '../../utils/Title';

export default function Login() {
  return (
    <Forms>
      <Title title="Iniciar Sesion" />
      <Inputs>
        <label htmlFor="email-singIn">Email:</label>
        <input type="text" placeholder="@" id="email-singIn" />
      </Inputs>
      <Inputs>
        <label htmlFor="password-singIn">Contrasena:</label>
        <input type="password" placeholder="********" id="password-singIn" />
      </Inputs>
      <Inputs><small>Forgot my password</small></Inputs>
      <Button text="Iniciar Sesion" color="primary" type="submit" />
    </Forms>
  );
}
