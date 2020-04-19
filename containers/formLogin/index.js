import React, { useContext } from 'react';
import { FormWrapper } from './styled';
import { Container } from '../../styled'
import SingIn from './singIn';
import SingUp from './singUp';
import { ContextMobile } from '../../context/MobileContext';

const FormLogin = () => {
  const contextMobile = useContext(ContextMobile);
  const { modeMobile } = contextMobile;

  return (
    <FormWrapper modeMobile={modeMobile}>
      <Container>
        <SingIn />
        <SingUp/>
      </Container>
    </FormWrapper>
  )
}

export default FormLogin;