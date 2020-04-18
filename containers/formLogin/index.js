import React, { useContext } from 'react';
import { Form } from './styled';
import { Container } from '../../styled'
import Login from '../../components/singIn';
import Logout from '../../components/singUp';
import { ContextMobile } from '../../context/MobileContext';

const FormLogin = () => {
  const contextMobile = useContext(ContextMobile);
  const { modeMobile } = contextMobile;

  return (
    <Form modeMobile={modeMobile}>
      <Container>
        <Login />
        <Logout/>
      </Container>
    </Form>
  )
}

export default FormLogin;