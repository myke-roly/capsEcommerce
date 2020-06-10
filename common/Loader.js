import React from 'react';
import styled, { keyframes } from 'styled-components';

const ldsRing = keyframes`
  0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

const WrapperLoader = styled.div`
  display: inline-block;
  position: relative;
  left: 50%;
  margin-top: 15vh;
  width: 64px;
  height: 64px;
  transform: translateX(-50%);

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 51px;
    height: 51px;
    margin: 6px;
    border: 6px solid ${({ theme }) => theme.color.default};
    border-radius: 50%;
    animation: ${ldsRing} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    background: transparent;
    border-color: ${({ theme }) => theme.color.default} transparent transparent
      transparent;
  }

  div:nth-child(1) {
    animation-delay: -0.45s;
  }

  div:nth-child(2) {
    animation-delay: -0.3s;
  }

  div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;

const Loader = () => {
  return (
    <WrapperLoader>
      <div />
      <div />
      <div />
      <div />
    </WrapperLoader>
  );
};

export default Loader;
