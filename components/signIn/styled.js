import styled from 'styled-components';

export const Form = styled.form`
  p, a {
    font-size: 0.8em;
    margin-top: .5rem;
  }
  .error {
    text-align: center;
    color: ${(props) => props.theme.color.error};
  }

  .reset-pass {
    color: ${(props) => props.theme.color.default};
  }
  
  .register {
    border-bottom: 1px solid;
    color: ${(props) => props.theme.color.tercero};
  }
`;

export const Inputs = styled.p`
  input {
    border: 1px solid ${(props) => props.theme.color.default};
    color: ${(props) => props.theme.color.default};
  }
`;