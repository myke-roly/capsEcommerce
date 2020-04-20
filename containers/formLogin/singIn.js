import React, { useContext, useState, useEffect } from 'react';
import { Forms, Inputs } from './styled';
import Router from 'next/router';
import Button from '../../utils/Button';
import Title from '../../utils/Title';
import { ContextAuth } from '../../context/AuthContext';
import { ContextMessage } from '../../context/MessageContext';

export default function Login() {
  const contextAuth = useContext(ContextAuth);
  const { auth, message, logIn } = contextAuth;

  const contextMessage = useContext(ContextMessage);
  const { messageAlert, showMessage } = contextMessage;

  const [state, setState] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    if(auth) {
        Router.push('/');
    }
    if(message) {
      showMessage(message)
    }
  }, [auth, message, Router]);

  const hanldleSubmit = (e) => {
    e.preventDefault();
    if(state.email.trim() === '' || state.password.trim() == '') {
      return;
    }
    logIn(state);
  };

  const handleChange = (e) => {
    setState({...state, [e.target.name]: e.target.value });
  };

  return (
    <Forms onSubmit={hanldleSubmit}>
      <Title title="Iniciar Sesion" />
      <Inputs>
        <label htmlFor="email-singIn">Email:</label>
        <input
          type="text"
          placeholder="@"
          id="email-singIn"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
      </Inputs>
      <Inputs>
        <label htmlFor="password-singIn">Contrasena:</label>
        <input
          type="password"
          placeholder="********"
          id="password-singIn"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
      </Inputs>
      <Inputs>
        <small>Forgot my password</small>
      </Inputs>
      <Button text="Iniciar Sesion" color="primary" type="submit" />
      {messageAlert && <p>{messageAlert}</p>}
    </Forms>
  );
}
