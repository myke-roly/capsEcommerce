import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const ButtonWrapper = styled.a`
  ${props =>
    props.color === 'primary' && {
      border: '2px solid' + props.theme.color.primary,
      background: props.theme.color.primary
    }};
  ${props =>
    props.color === 'dark' && {
      background: props.theme.color.dark,
      border: '2px solid' + props.theme.color.dark,
      color: props.theme.color.primary
    }};
  ${props =>
    props.color === 'secondary' && {
      background: props.theme.color.secondary,
      border: '2px solid' + props.theme.color.secondary,
      color: props.theme.color.primary
    }};
  border-radius: 7px;
  padding: .7rem 1.5rem;
  cursor: pointer;
  font-size: 1em;
  transition: all 0.3s ease;
  box-shadow: 0 0 7px 5px rgba(0, 0, 0, .1);
  letter-spacing: 1.5px;

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
