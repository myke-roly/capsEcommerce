import React, { useContext } from 'react';
import { Container } from '../../utils/Container';
import { WrapperAbout, FlexDescription } from './styled';
import { ContextMobile } from '../../context/MobileContext';
import Title from '../../utils/Title';

const About = () => {
  const contextMobile = useContext(ContextMobile);
  const { modeMobile } = contextMobile;

  return (
    <WrapperAbout>
      <Container>
        <FlexDescription modeMobile={modeMobile}>
          <div className="about-description">
            <Title title="Sobre Nosotros" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ipsam quaerat maxime officiis cumque, blanditiis fuga ipsum possimus quibusdam odio iusto beatae eos laborum. Nisi ullam illo tempora quos veniam?</p>
          </div>
          <figure><img src="./img-4.jpg" alt="caps" /></figure>
        </FlexDescription>
        <FlexDescription modeMobile={modeMobile}>
          <figure><img src="./cap-girl-3.jpeg" alt="caps-girl" /></figure>
          <div className="about-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ipsam quaerat maxime officiis cumque, blanditiis fuga ipsum possimus quibusdam odio iusto beatae eos laborum. Nisi ullam illo tempora quos veniam?</p>
          </div>
        </FlexDescription>
      </Container>
    </WrapperAbout>
  );
};

export default About;
