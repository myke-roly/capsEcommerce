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
    font-size: 14px;
    height: 50vh;
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
    opacity: 0.2;
    z-index: 2;
  }
`;

export const Content = styled.section`
  position: absolute;
  bottom: 10vh;
  z-index: 10;

  @media (max-width: 900px) {
    bottom: 7vh;
  }

  h1 {
    color: ${props => props.theme.color.primary};
    font-size: 4em;
    font-weight: 700;
    letter-spacing: .2rem;
    animation: ${animate} 0.8s ease-in;
    /* background-color: ${props => props.theme.color.default}; */
    padding: 1rem 2.5rem;
    border-radius: 5px;
    margin-block-end: 2rem;
    box-shadow: -5px 5px 10px 5px rgba(0, 0, 0, .3);
    border-left: 5px solid ${props => props.theme.color.secondary};
    
    span {
      font-size: .4em;
      border-bottom: 2px solid ${props => props.theme.color.secondary};
      color: ${({theme}) => theme.color.secondary};
    }
  }
  
  p {
    color: ${props => props.theme.color.tercero};
    font-size: .25em;
    font-weight: 400;
    animation: ${animate} 0.8s ease-out;
  }
`;