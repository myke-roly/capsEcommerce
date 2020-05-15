import React from 'react';
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from 'react-icons/io';
import { Container } from '../../styled';
import { FooterWrapper, FooterSocial} from './styled';

const Footer = () => {

  const yeard = new Date().getFullYear();
  return (
    <FooterWrapper>
      <Container>
        <small>&copy; myke_roly | {yeard} Derechos reservados</small>
        <FooterSocial>
          <a href="https://www.twitter.com/myke_roly" target="_blank" rel="noreferrer noopener" arial-label="link twitter"><IoLogoTwitter /><span>Twitter</span></a>
          <a href="https://www.instagram.com/myke_roly" target="_blank" rel="noreferrer noopener" arial-label="link instagram"><IoLogoInstagram /><span>Instagram</span></a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer noopener" arial-label="link facebook"><IoLogoFacebook /><span>facebook</span></a>
        </FooterSocial>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;