import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { Container } from './Container';

const ldsRing = keyframes`
  0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

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
  .loader {
  animation: ${ldsRing} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
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
