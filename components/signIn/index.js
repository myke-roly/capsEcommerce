import React, { useContext, useState } from 'react';
import { Form, Inputs } from './styled';
import Link from 'next/link';
import Button from '../../common/Button';
import Title from '../../common/Title';

export default function Login({ logIn, messageAlert}) {

  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const hanldleSubmit = (e) => {
    e.preventDefault();
    if(state.email.trim() === '' || state.password.trim() == '') return;
    logIn(state);
  };

  const handleChange = (e) => {
    setState({...state, [e.target.name]: e.target.value });
  };

  return (
    <Form onSubmit={hanldleSubmit}>
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
      {messageAlert && <p className="error">{messageAlert}</p>}
      <Button 
        disabled={Object.values(state).includes('')} 
        text="Iniciar Sesion" 
        color="secondary" 
        type="submit" 
      />
      <p className="reset-pass">Olvide mi Contrasena</p>
      <Link href="/registrarse" passHref>
        <a className="register">Crear Cuenta</a>
      </Link>
    </Form>
  );
}
