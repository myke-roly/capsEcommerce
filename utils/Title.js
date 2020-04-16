import React from 'react';
import styled from 'styled-components';

const WrapperTitle = styled.h1`
  font-size: 1.2em;
  /* text-transform: uppercase; */
  letter-spacing: 3px;
  color: ${(props) => props.theme.color.secondary};
  position: relative;
  text-align: center;
  margin-bottom: 1rem;

  &::before {
    content: '';
    position: absolute;
    width: 50px;
    height: 5px;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50px;
    background: ${(props) => props.theme.color.secondary};
  }
`;

export default function Title({ title }) {
  return <WrapperTitle>{title}</WrapperTitle>;
}
