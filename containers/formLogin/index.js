import React, { useContext, useEffect } from 'react'
import { useRouter } from 'next/router';
import { FormWrapper } from './styled';
import { Container } from '../../styled';
import SingIn from './logIn';
import Register from './register';
import { ContextMobile } from '../../context/MobileContext';
import { ContextAuth } from '../../context/AuthContext';
import { ContextMessage } from '../../context/MessageContext';

const FormLogin = () => {
  const contextMobile = useContext(ContextMobile);
  const { modeMobile } = contextMobile;

  const contextMessage = useContext(ContextMessage);
  const { messageAlert, showMessage } = contextMessage;

  const contextAuth = useContext(ContextAuth);
  const { message, auth, newRegister, logIn } = contextAuth;

  const router = useRouter();

  useEffect(() => {
    if (auth) router.push('/productos');
    if (message) showMessage(message, '');
  }, [auth, message, router]);

  return (
    <FormWrapper modeMobile={modeMobile}>
      <Container>
        <SingIn messageAlert={messageAlert} logIn={logIn} />
        <Register
          showMessage={showMessage}
          messageAlert={messageAlert}
          newRegister={newRegister}
          showMessage={showMessage}
        />
      </Container>
    </FormWrapper>
  );
};

export default FormLogin;
