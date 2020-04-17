import styled from 'styled-components';

export const WrapperContact = styled.main`
  width: 100%;
  background: url('./cap-girl-9.jpg') no-repeat center center/cover;
  min-height: 90vh;
  padding: 2em 0;
  @media (max-width: 900px) {
    font-size: 14px;
  }

  .wrapper {
    width: 100%;
    display: ${(props) => (props.modeMobile ? 'block' : 'flex')};

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
    background: ${(props) => props.theme.color.dark};
    opacity: .9;
    padding: 2em 3rem;
    border-radius:10px;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.7);
    width: 100%;

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
    /* display: block;
    width: 100%;
    margin: 0.7rem 0;
    background: ${(props) => props.theme.color.primary};
    padding: 0.5rem 1rem;
    border: 2px solid ${(props) => props.theme.color.default};
    border-radius: 5px; */

    width: 100%;
    padding: 0.5rem 1rem;
    margin: 0.7rem 0;
    /* background: ${(props) => props.theme.color.primary}; */
    background: transparent;
    border: none;
    border: 2px solid ${(props) => props.theme.color.primary};
    color: ${(props) => props.theme.color.primary};
  }
`;
