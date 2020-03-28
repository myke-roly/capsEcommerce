import styled, { keyframes } from 'styled-components';

const animate = keyframes`
  from {
    opacity: 0;
    transform: translate(-40%, 0); 
  }
  to {
    opacity:1;
    transform: translate(0); 
  }
`;

export const WrapperHeader = styled.header`
  height: 65vh;
  width: 100%;
  position: relative;
  background: linear-gradient(to left, #333, #000, #000);

  @media (max-width: 900px) {
    font-size: 12px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('./cap-black.jpg');
    background-repeat: no-repeat;
    background-position: 0;
    background-size: cover;
    opacity: 0.4;
    z-index: 2;
  }
`;

export const Content = styled.section`
  position: absolute;
  bottom: 5vh;
  z-index: 10;
  text-align: center;

  h1 {
    color: ${props => props.theme.color.primary};
    font-size: 4em;
    font-weight: 700;
    letter-spacing: .5rem;
    animation: ${animate} 0.8s ease-in;
  }

  p {
    font-size: 1em;
    color: ${props => props.theme.color.primary};
    opacity: .5;
    margin-left: 1rem;
    margin-bottom: 1.5rem;
    animation: ${animate} 0.8s ease-out;
  }
`;