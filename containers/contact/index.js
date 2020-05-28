import React, { useContext } from 'react';
import { WrapperContact, Input } from './styled';
import { Container } from '../../common/Container';
import Button from '../../common/Button';
import Form from '../../common/Form';
import Title from '../../common/Title';

const Contact = () => {
  return (
    <WrapperContact>
      <Container>
        <Form>
          <form>
            <Title title="Formulario de Contacto" />
            <Input>
              <label htmlFor="name">Nombre: </label>
              <input type="text" id="name" placeholder="Nombre" />
            </Input>
            <Input>
              <label htmlFor="email">Email: </label>
              <input type="email" id="email" placeholder="@" />
            </Input>
            <Input>
              <label htmlFor="phone">Telefono de Contacto: </label>
              <input type="phone" id="phone" placeholder="11-21222222" />
            </Input>
            <Input>
              <label htmlFor="message">Mensaje: </label>
              <textarea placeholder="..." id="message"></textarea>
            </Input>
            <Button text="enviar formulario" color="default" type="sutmit" />
          </form>
        </Form>
        <div id="map"></div>
      </Container>
    </WrapperContact>
  );
}

export default Contact;