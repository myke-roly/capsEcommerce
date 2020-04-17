import styled from 'styled-components';

export const FormLogout = styled.div`
  width: 100%;
  
  form {
    background: ${(props) => props.theme.color.dark};
    padding: 2em 3rem;
    border-radius:10px;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.7);
    width: 100%;

    p {

      label {
        font-size: .8em;
        color: ${(props) => props.theme.color.gray};
      }

      input {
        width: 100%;
        padding: 0.5rem 1rem;
        margin: 0.7rem 0;
        /* background: ${(props) => props.theme.color.primary}; */
        background: transparent;
        border: none;
        border: 2px solid ${(props) => props.theme.color.primary};
        color: ${(props) => props.theme.color.primary};
      }
    }
  }
`;
