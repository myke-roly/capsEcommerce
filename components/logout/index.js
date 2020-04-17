import React from 'react';
import Button from '../../utils/Button';
import { FormLogout } from './styled';
import Title from '../../utils/Title';

const Logout = () => {
  return (
    <FormLogout>
      <form>
        <Title title="Registrarme" />
        <p>
          <label htmlFor="name">Nombre Completo:</label>
          <input type="text" placeholder="Nombre" id="name" />
        </p>
        <p>
          <label htmlFor="email">Email:</label>
          <input type="text" placeholder="@" id="email" />
        </p>
        <p>
          <label htmlFor="password">Contrasena:</label>
          <input type="password" placeholder="********" id="password" />
        </p>
        <p>
          <label htmlFor="password-confirm">Confirmar Contrasena:</label>
          <input type="password" placeholder="********" id="password-confirm" />
        </p>
        <p>
          <input type="checkbox" id="password" />
          <small>Acepto los terminos</small>
        </p>
        <Button text="Registrarme" color="secondary" type="submit" />
      </form>
    </FormLogout>
  );
};

export default Logout;
