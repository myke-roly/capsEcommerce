import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const ButtonWrapper = styled.button`
  ${props =>
    props.color === 'primary' && {
      background: 'transparent',
      border: '2px solid' + props.theme.color.secondary,
      color: props.theme.color.secondary
    }};
  ${props =>
    props.color === 'dark' && {
      background: 'transparent',
      color: props.theme.color.dark,
      borderColor: props.theme.color.dark
    }};
  ${props =>
    props.color === 'success' && {
      background: 'transparent',
      color: props.theme.color.success,
      borderColor: props.theme.color.success
    }};
  border-radius: 50px;
  padding: 0.5rem 1.2rem;
  cursor: pointer;
  font-size: 0.8em;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.7;
  }
`;

export default function Button({ color, text, children, type }) {
  return (
    <ButtonWrapper color={color} type={type}>
      {text} {children}
    </ButtonWrapper>
  );
}
