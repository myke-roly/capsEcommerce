import styled from 'styled-components';

export const FormWrapper = styled.main`
  min-height: 90vh;
  padding: 2rem 0;
  background: ${(props) => props.theme.color.primary};

  & > div {
    display: ${(props) => (props.modeMobile ? 'block' : 'flex')};
  }
`;

export const Forms = styled.form`
  width: 100%;
  height: 100%;
  /* background: ${(props) => props.theme.color.gray}; */
  opacity: 0.95;
  padding: 3em;
  /* border-radius:10px; */
  /* box-shadow: 0 0 7px rgba(0, 0, 0, 0.7); */
  margin-bottom: 2rem;

  &:last-child {
    input {
      /* border: ${(props) => props.errorInput && '2px solid red'}; */
    }
  }

  &:first-child {
    /* background: ${(props) => props.theme.color.dark}; */

    label {
      color: ${(props) => props.theme.color.default};
    }
    input {
      width: 100%;
      padding: 0.4rem 1rem;
      background: transparent;
      border: 2px solid ${(props) => props.theme.color.default};
      color: ${(props) => props.theme.color.gray};
    }
  }

  button {
    margin-block-start: 1rem;
    width: 100%;
  }
  p {
    font-size: 0.8rem;
    color: ${(props) => props.theme.color.tercero};
  }
`;

export const Inputs = styled.p`
  width: 100%;

  label {
    font-size: 0.8em;
    color: ${(props) => props.theme.color.default};
  }

  input {
    width: 100%;
    padding: 0.5rem 1rem;
    margin: 0.7rem auto;
    background: transparent;
    border: 2px solid ${(props) => props.theme.color.default};
    color: ${(props) => props.theme.color.default};
  }
`;

export const MessageError = styled.div`
  margin-top: 1rem;
  color: ${(props) => props.theme.color.error};
  text-align: center;
  font-size: 0.8rem;
`;
