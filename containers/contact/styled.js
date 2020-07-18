import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  > p {
    width: 48%;
  }
`;

export const Input = styled.p`
  label {
    color: ${(props) => props.theme.color.tercero};
  }

  input,
  textarea {
    color: ${(props) => props.theme.color.default};
    border: 1px solid ${(props) => props.theme.color.default};
  }
`;
