import React from 'react'
import styled from 'styled-components';

const WrapperTitle = styled.h1`
    font-size: 2rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: white;
`;

export default function Title({title}) {
  return (
    <WrapperTitle>
      {title}
    </WrapperTitle>
  )
}
