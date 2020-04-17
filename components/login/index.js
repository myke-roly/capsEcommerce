import React, { useContext } from 'react';
import {  FormLogin } from './styled';
import Button from '../../utils/Button';
import Title from '../../utils/Title';

export default function Login() {
  return (
    <FormLogin>
      <form>
        <Title title="Iniciar Sesion" />
        <p>
          <label htmlFor="email">Email:</label>
          <input type="text" placeholder="@" id="email" />
        </p>
        <p>
          <label htmlFor="password">Contrasena:</label>
          <input type="password" placeholder="********" id="password" />
        </p>
        <p>Forgot my password</p>
        <Button text="Iniciar Sesion" color="dark" type="submit" />
      </form>
    </FormLogin>
  );
}
