import React, { useContext } from 'react';
import { Container } from '../../styled';
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
          <img src="./img-4.jpg" alt="caps" />
          <div className="about-description">
            <Title title="Sobre Nosotros" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ipsam quaerat maxime officiis cumque, blanditiis fuga ipsum possimus quibusdam odio iusto beatae eos laborum. Nisi ullam illo tempora quos veniam?</p>
          </div>
        </FlexDescription>
        <FlexDescription modeMobile={modeMobile}>
          <div className="about-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ipsam quaerat maxime officiis cumque, blanditiis fuga ipsum possimus quibusdam odio iusto beatae eos laborum. Nisi ullam illo tempora quos veniam?</p>
          </div>
          <img src="./cap-girl-3.jpeg" alt="caps-girl" />
        </FlexDescription>
      </Container>
    </WrapperAbout>
  );
};

export default About;