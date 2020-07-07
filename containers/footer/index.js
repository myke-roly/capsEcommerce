import React from 'react';
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from 'react-icons/io';
import { Container } from '../../common/Container';
import { FooterWrapper, FooterSocial} from './styled';
import { ContextMP } from '../../context/MPContext';

const Footer = () => {
  const contextMP = React.useContext(ContextMP);
  const { getMethodsPayment } = contextMP;

  const yeard = new Date().getFullYear();
  return (
    <FooterWrapper>
      <Container>
        <FooterSocial>
          <a href="https://www.twitter.com/myke_roly" target="_blank" rel="noreferrer noopener" arial-label="link twitter"><IoLogoTwitter /><span>Twitter</span></a>
          <a href="https://www.instagram.com/myke_roly" target="_blank" rel="noreferrer noopener" arial-label="link instagram"><IoLogoInstagram /><span>Instagram</span></a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer noopener" arial-label="link facebook"><IoLogoFacebook /><span>facebook</span></a>
        </FooterSocial>
        <p><small>myke_roly | {yeard} &copy; Derechos reservados</small></p>
        <button onClick={getMethodsPayment}>get data</button>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;