import styled from 'styled-components';

export const FormLogin = styled.div`
  width: 100%;
  
  form {
    background: ${(props) => props.theme.color.gray};
    padding: 2em 3rem;
    border-radius:10px;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.7);
    width: 95%;
    margin: 1rem;

    p {
      margin-bottom: 2rem;

      label {
        font-size: .8em;
        color: ${(props) => props.theme.color.tercero};
      }

      input {
        width: 100%;
        padding: 0.4rem 1rem;
        /* background: ${(props) => props.theme.color.primary}; */
        background: transparent;
        border: none;
        border-bottom: 2px solid ${(props) => props.theme.color.default};
        color: ${(props) => props.theme.color.dark};
      }
    }
  }
`;

export const Title = styled.div`
  color: ${(props) => props.theme.color.dark};
  padding: 1rem 0;
  font-size: 1.5rem;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 2rem;
`;
