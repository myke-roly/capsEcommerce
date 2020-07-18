import React, { useContext } from 'react';
import { Input, Flex } from './styled';
import Button from '../../common/Button';
import Form from '../../common/Form';
import Title from '../../common/Title';

const Contact = () => {
  return (
    <Form>
      <form>
        <Input>
          <label htmlFor="name">Nombre: </label>
          <input type="text" id="name" placeholder="Nombre" />
        </Input>
        <Flex>
          <Input>
              <label htmlFor="email">Email: </label>
              <input type="email" id="email" placeholder="@" />
            </Input>
            <Input>
              <label htmlFor="phone">Telefono de Contacto: </label>
              <input type="phone" id="phone" placeholder="11-21222222" />
            </Input>
        </Flex>
        <Input>
          <label htmlFor="message">Mensaje: </label>
          <textarea placeholder="..." id="message"></textarea>
        </Input>
        <Button text="Enviar formulario" size="block" color="default" type="submit" />
      </form>
    </Form>
  );
}

export default Contact;