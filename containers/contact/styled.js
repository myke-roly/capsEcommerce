import styled from 'styled-components';

export const WrapperContact = styled.main`
  width: 100%;
  padding: 2em 0;
  @media (max-width: 900px) {
    font-size: 14px;
  }

  button {
    border-radius: 0;
    margin-top: 1rem;
  }
`;

export const Input = styled.p`
  label {
    color: ${(props) => props.theme.color.tercero};
  }

  input,
  textarea {
    color: ${(props) => props.theme.color.default};
    border: 2px solid ${(props) => props.theme.color.default};
  }
`;
