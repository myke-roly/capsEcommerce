import React, { useState, useContext } from 'react';
import Button from '../../utils/Button';
import { FormLogout } from './styled';
import Title from '../../utils/Title';
import { ContextAuth } from '../../context/AuthContext';
import Router from 'next/router';

const Logout = () => {

  const contextAuth = useContext(ContextAuth);
  const { userData, newRegister } = contextAuth;

  const [data, setData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    terminos: false,
  });

  const changeData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const changeSubmit = e => {
    e.preventDefault();
    newRegister(data);
    setTimeout(() => {
      Router.push('/me')
    }, 2000);
  }

  return (
    <FormLogout>
      <form onSubmit={changeSubmit}>
        <Title title="Registrarme" />
        <p>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            placeholder="Nombre"
            id="name"
            name="name"
            value={data.name}
            onChange={changeData}
          />
        </p>
        <p>
          <label htmlFor="lastName">Apellido:</label>
          <input
            type="text"
            placeholder="Apellido"
            id="lastName"
            name="lastName"
            value={data.lastName}
            onChange={changeData}
          />
        </p>
        <p>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            placeholder="@"
            id="email"
            name="email"
            value={data.email}
            onChange={changeData}
          />
        </p>
        <p>
          <label htmlFor="password">Contrasena:</label>
          <input
            type="password"
            placeholder="********"
            id="password"
            name="password"
            value={data.password}
            onChange={changeData}
          />
        </p>
        <p>
          <label htmlFor="password-confirm">Confirmar Contrasena:</label>
          <input
            type="password"
            placeholder="********"
            id="confirmPassword"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={changeData}
          />
        </p>
        <p>
          <input type="checkbox" id="terms" />
          <small>Acepto los terminos</small>
        </p>
        <Button text="Registrarme" color="secondary" type="submit" />
      </form>
    </FormLogout>
  );
};

export default Logout;
