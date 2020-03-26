import React from 'react';
import Button from '../utils/Button';
import Title from '../utils/Title';
import Layout from '../containers/Layout';
import { Container } from '../styled';

export default () => {
  return (
    <Layout>
      <Container>
        <form>
          <Title title="Iniciar Sesion" />
          <div>
            <label htmlFor="user">Nombre de Usuario</label>
            <input type="text" placeholder="Nombre de Usuario" id="user" />
          </div>
          <div>
            <label htmlFor="user">Nombre de Usuario</label>{' '}
            <input type="password" placeholder="Contrasena" />
          </div>
          <Button text="Ingresar" color="success" type="submit" />
        </form>
      </Container>
    </Layout>
  );
};
