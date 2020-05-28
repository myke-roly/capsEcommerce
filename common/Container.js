import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { ContextMobile } from '../context/MobileContext';

const ContainerWrapper = styled.div`
  width: ${props => props.modeMobile ? '95%' : '90%'};
  margin: auto;
`;

export function Container(props) {
  const contextMobile = useContext(ContextMobile);
  const { modeMobile } = contextMobile;

  return (
    <ContainerWrapper modeMobile={modeMobile}>
      {props.children}
    </ContainerWrapper>
  )
}