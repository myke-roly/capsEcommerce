import React, { useContext } from 'react';
import styled from 'styled-components';
import { Container } from './Container';
import { ContextMobile } from '../context/MobileContext';

const Forms = styled.div`
  width: 650px;
  margin: auto;
  height: 100%;
  padding: 3em;
  @media (max-width: 720px) {
    width: 100%;
  }

  label {
    color: ${(props) => props.theme.color.tercero};
    font-size: .8em;
  }

  textarea,
  input {
    width: 100%;
    padding: .7rem 1rem;
    margin: 0.5rem auto;
    background: transparent;
  }

  button {
    margin-block-start: 1rem;
    width: 100%;
  }
`;

const Form = (props) => {
  return (
    <>
      <Container>
        <Forms {...props}>{props.children}</Forms>
      </Container>
    </>
  );
};

export default Form;
