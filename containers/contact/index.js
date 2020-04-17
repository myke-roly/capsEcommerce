import React, { useContext } from 'react';
import { WrapperContact, Input } from './styled';
import { Container } from '../../styled';
import Button from '../../utils/Button';
import { ContextMobile } from '../../context/MobileContext';
import Title from '../../utils/Title';

const Contact = () => {

  const context = useContext(ContextMobile);
  const { modeMobile } = context;

  return (
    <WrapperContact modeMobile={modeMobile}>
      <Container>
        <section className="wrapper">
          <div></div>
          <form className="form">
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
            <Button text="enviar formulario" color="primary" type="sutmit" />
          </form>
        </section>
      </Container>
    </WrapperContact>
  );
}

export default Contact;