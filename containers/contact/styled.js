import styled from 'styled-components';

export const WrapperContact = styled.main`
  width: 100%;
  background: ${(props) => props.theme.color.primary};
  min-height: 90vh;
  padding: 2em 0;
  @media (max-width: 900px) {
    font-size: 14px;
  }

  .wrapper {
    /* padding-top: 2em; */
    width: 100%;
    display: ${(props) => (props.modeMobile ? 'block' : 'flex')};
    align-items: center;

    div {
      display: block;
      width: 100%;
      img {
        width: 100%;
        border-radius: 10px;
      }
    }
  }

  form {
    width: 100%;
    padding: 2rem;

    button {
      margin-top: 1rem;
    }
  }
`;

export const Input = styled.div`
  width: 100%;

  label {
    color: ${(props) => props.theme.color.tercero};
    font-size: 0.8em;
  }

  input,
  textarea {
    display: block;
    width: 100%;
    margin: 0.7rem 0;
    background: ${(props) => props.theme.color.primary};
    padding: 0.5rem 1rem;
    border: 2px solid ${(props) => props.theme.color.default};
    border-radius: 5px;
  }
`;
