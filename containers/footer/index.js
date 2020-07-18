import React from 'react';
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from 'react-icons/io';
import { Container } from '../../common/Container';
import { FooterWrapper, FooterSocial, Flex, Copy } from './styled';
import MethodsPayment from './MethodsPayment';
import Contact from '../../containers/contact';

const Footer = () => {
  const yeard = new Date().getFullYear();
  return (
    <FooterWrapper>
      <Container>
        <Flex>
          <div className="others">
            <h4>Redes sociales</h4>
            <FooterSocial>
              <a
                href="https://www.twitter.com/myke_roly"
                target="_blank"
                rel="noreferrer noopener"
                arial-label="link twitter"
              >
                <IoLogoTwitter />
                <span>Twitter</span>
              </a>
              <a
                href="https://www.instagram.com/myke_roly"
                target="_blank"
                rel="noreferrer noopener"
                arial-label="link instagram"
              >
                <IoLogoInstagram />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer noopener"
                arial-label="link facebook"
              >
                <IoLogoFacebook />
                <span>facebook</span>
              </a>
            </FooterSocial>
            <h4>Metodos de pagos</h4>
            <MethodsPayment />
          </div>
          <Contact />
        </Flex>
      </Container>
      <Copy>CAPSARG<small> | {yeard} &copy; Derechos reservados created by Mykedev</small></Copy>
    </FooterWrapper>
  );
};

export default Footer;
