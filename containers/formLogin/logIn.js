import React, { useContext, useState, useEffect } from 'react';
import { Forms, Inputs } from './styled';
import { useRouter } from 'next/router';
import Button from '../../utils/Button';
import Title from '../../utils/Title';

export default function Login({ logIn, messageAlert}) {

  const [state, setState] = useState({
    email: '',
    password: '',
  });

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
          type="email"
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
