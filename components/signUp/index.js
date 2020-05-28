import React, { useState } from 'react';
import { MessageError, Inputs } from './styled';
import Button from '../../common/Button';
import Title from '../../common/Title';

const Register = ({ messageAlert, newRegister, showMessage}) => {
  const [data, setData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false,
  });

  const handleChange = (e) => {
    const value = e.target.name === 'terms' ? e.target.checked : e.target.value;
    setData({ ...data, [e.target.name]: value });
  };

  const { name, lastName, email, password, confirmPassword, terms } = data;
  const handleSubmit = e => {
    e.preventDefault();
    if (!name || !lastName ||!email ||!password || !confirmPassword || !terms) {
      showMessage('** Todos los campos son obligaorios', 'text-error');
      return;
    }

    if(password.length < 8) {
      showMessage('* La contrasena debe tener mas de 8 caracteres', 'text-error');
      return;
    }

    if(password !== confirmPassword) {
      showMessage('* Las contrasenas no son iguales', 'text-error');
      return;
    }

    newRegister(data);
  };

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
          value={data.name}
          onChange={handleChange}
        />
      </Inputs>
      <Inputs>
        <label htmlFor="lastName">Apellido:</label>
        <input
          type="text"
          placeholder="Apellido"
          id="lastName"
          name="lastName"
          value={data.lastName}
          onChange={handleChange}
        />
      </Inputs>
      <Inputs>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          placeholder="@"
          id="email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
      </Inputs>
      <Inputs>
        <label htmlFor="password">Contrasena:</label>
        <input
          type="password"
          placeholder="********"
          id="password"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
      </Inputs>
      <Inputs>
        <label htmlFor="password-confirm">Confirmar Contrasena:</label>
        <input
          type="password"
          placeholder="********"
          id="confirmPassword"
          name="confirmPassword"
          value={data.confirmPassword}
          onChange={handleChange}
        />
      </Inputs>
      <Inputs>
        <label htmlFor="terms">Acepto los terminos y condiciones</label>
        <input
          type="checkbox"
          name="terms"
          id="terms"
          onChange={handleChange}
          checked={data.terms}
        />
      </Inputs>
      <Button 
        text="Registrarme" 
        color="dark" 
        type="submit"
        disabled={Object.values(data).includes(false)}
      />
      {messageAlert && <MessageError>{messageAlert}</MessageError>}
    </form>
  );
};

export default Register;
