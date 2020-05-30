import React from 'react';
import { Form, Inputs } from './styled';
import Link from 'next/link';
import Button from '../../common/Button';
import Title from '../../common/Title';
import InputPassword from '../../common/InputPassword';
import useValidateInputs from '../../hooks/useValidateInputs';
import { validateSignIn } from '../../libs/validate';

export default function Login({ logIn, messageAlert}) {
  let initialState = {
    email: '',
    password: '',
  };
  
  const { state, errors, handleChange, handleSubmit, handleBlur } = useValidateInputs(initialState, validateSignIn, logIn);

  return (
    <Form onSubmit={handleSubmit}>
      <Title title="Iniciar Sesion" />
      <Inputs>
        <label htmlFor="email-singIn">Email:</label>
        <input
          type="email"
          placeholder='@'
          id="email-singIn"
          name="email"
          value={state.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && <small style={{color: 'red'}}>{errors.email}</small> }
      </Inputs>
      <Inputs>
        <label htmlFor="password-singIn">Contrasena:</label>
        <InputPassword 
          id="password-singIn"
          name="password"
          value={state.value}
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
