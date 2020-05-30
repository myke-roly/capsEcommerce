import styled from 'styled-components';

export const Inputs = styled.div`
  width: 100%;
  font-size: 0.7em;

  input {
    border: 1px solid ${(props) => props.theme.color.default};
    color: ${(props) => props.theme.color.dark};
  }
`;

export const MessageError = styled.div`
  margin-top: 1rem;
  color: ${(props) => props.theme.color.error};
  text-align: center;
  font-size: 0.8rem;
`;
