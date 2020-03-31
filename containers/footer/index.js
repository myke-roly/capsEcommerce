import React from 'react';
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import { Container } from '../../styled';
import { FooterWrapper, FooterSocial} from './styled';

const Footer = () => {

  const yeard = new Date().getFullYear();

  return (
    <FooterWrapper>
      <Container>
        <small>&copy; myke_roly | {yeard}</small>
        <FooterSocial>
          <a href="https://www.twitter.com/myke_roly" target="_blank" rel="noreferrer noopener"><IoLogoTwitter /></a>
          <a href="https://www.instagram.com/myke_roly" target="_blank" rel="noreferrer noopener"><IoLogoInstagram /></a>
          <a href="https://www.linkedin.com/in/myke_roly" target="_blank" rel="noreferrer noopener"><IoLogoLinkedin /></a>
          <a href="https://www.github.com/myke-roly" target="_blank" rel="noreferrer noopener"><IoLogoGithub /></a>
        </FooterSocial>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;