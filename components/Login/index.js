import React, { useState } from 'react';
import { Form, SessionOptions, LoginForm, ButtonClose } from './styled';
import Button from '../../utils/Button';

export default function Login(props) {
  const [showForm, setShowForm] = useState(true);

  return (
    <Form modeMobile={props.modeMobile}>
      <ButtonClose onClick={props.closeForm} />
      <form action="">
        <SessionOptions>
          <div className="login" onClick={() => setShowForm(true)}>
            <span>Iniciar Sesion</span>
          </div>
          <div className="logout" onClick={() => setShowForm(false)}>
            <span>Registrarme</span>
          </div>
        </SessionOptions>
        {showForm ? (
          <LoginForm>
            <p>
              <label htmlFor="email">Email:</label>
              <input type="text" placeholder="@" id="email" />
            </p>
            <p>
              <label htmlFor="password">Contrasena:</label>
              <input type="password" placeholder="********" id="password" />
            </p>
            <Button text="Iniciar Sesion" color="secondary" type="submit" />
            <small>Forgot my password</small>
          </LoginForm>
        ) : (
          <LoginForm>
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
          </LoginForm>
        )}
      </form>
    </Form>
  );
}
