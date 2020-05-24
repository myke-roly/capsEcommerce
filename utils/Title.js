import React from 'react';
import styled from 'styled-components';

const WrapperTitle = styled.h2`
  font-size: 1.2em;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: ${(props) => props.theme.color.dark};
  position: relative;
  text-align: center;
  margin: 1.5rem 0;
  font-weight: 400;

  &::before {
    content: '';
    position: absolute;
    width: 80px;
    height: 2px;
    bottom: -0.7rem;
    left: 50%;
    transform: translateX(-50%);
    background: ${(props) => props.theme.color.dark};
  }
`;

export default function Title({ title }) {
  return <WrapperTitle>{title}</WrapperTitle>;
}
