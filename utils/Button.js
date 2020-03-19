import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const ButtonWrapper = styled.a`
  ${props =>
    props.color === 'primary' && {
      background: 'transparent',
      color: props.theme.color.primary,
      borderColor: props.theme.color.primary
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
  border: 1.5px solid;
  border-radius: 50px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 0.8em;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.7;
  }
`;

export default function Button({ color, text }) {
  return <ButtonWrapper color={color}>{text}</ButtonWrapper>;
}
