import styled from 'styled-components';

export const WrapperProduct = styled.main`
  display: flex;
  flex-direction: ${props => props.modeMobile ? 'column' : 'row' };
  justify-content: space-evenly;
  align-items: center;
  margin: ${props => props.modeMobile ? '2rem 0' : '2rem' };
  font-size: 18px;

  @media (max-width: 920px) {
    font-size: 16px;
  }
`;

export const Images = styled.section`
  width: 100%;
  height: 100%;

  img {
    border: 2px solid ${({theme}) => theme.color.default};
    width: 100%;
    height: 100%;
  }
`;

export const Detail = styled.section`
  width: 100%;
  height: 100%;
  padding: 1.5rem;

  h2 {
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-size: 1.5em;
  }

  button {
    display: block;
    width: 80%;
    margin: 1.5rem auto;
  }
`;

export const Section = styled.section`
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;

  h4 {
    color: ${({theme}) => theme.color.tercero};
    font-weight: 400;
    font-size: .7em;
  }

  p {
    color: ${({theme}) => theme.color.deafult};
    font-size: .8em;
    opacity: .8;
    font-weight: 400;
    text-transform: uppercase;
    line-height: 1.5rem;
  }

  .price {
    font-size: 1.2rem;
    color: ${({theme}) => theme.color.default};
    font-weight: 600;
  }

  .color {
    display: inline-block;
    width: 1.2em;
    height: 1.2em;
    background: red;
    border-radius: 50%;
    margin: 0 .5rem;
  }

  .description {
    text-transform: initial;
    float: right;
  }
`;