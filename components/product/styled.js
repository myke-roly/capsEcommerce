import styled from 'styled-components';

export const WrapperProduct = styled.div`
  max-width: 960px;
  margin: 2rem auto;
  display: ${props => props.modeMobile ? 'block' : 'flex' };;
  justify-content: space-evenly;
  align-items: center;
  padding: ${props => props.modeMobile ? '2rem 0' : '2rem' };
  overflow: hidden;

  @media (max-width: 720px) {
    font-size: 16px;
  }
`;

export const Images = styled.section`
  width: 100%;
  margin: auto;
`;

export const MainImage = styled.figure`
  height: 300px;
  width: 100%;
  padding: 2rem;

  img {
    width: 100%;
    height: 100%;
  }

  .scale {
    transform: scale(1.6);
  }
`;

export const Carrousel = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  figure {
    width: 60px;
    height: 50px;
    border: 2px solid ${({ theme }) => theme.color.dark}; 
    margin: 0.2em;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const Detail = styled.section`
  width: 100%;
  padding: 2em;
  background: ${({ theme }) => theme.color.primary};
  border-radius: 7px;

  h2 {
    color: ${({ theme }) => theme.color.dark};;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    font-size: 1.3em;
    font-weight: 500;
  }

  .price {
    font-size: 1.4rem;
    color: ${({theme}) => theme.color.dark};
    font-weight: bold;
    text-align: end;
    padding: 1rem 0;
    border-bottom: 1px solid #ededed;
  }
`;

export const Section = styled.section`
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;

  h4 {
    color: ${({theme}) => theme.color.default};
    font-weight: 600;
    font-size: .8em;
  }

  p {
    color: ${({theme}) => theme.color.dark};
    font-size: .8em;
    opacity: .8;
    font-weight: 400;
    text-transform: uppercase;
    line-height: 1.5rem;
    span {
      cursor: pointer;
    }
  }

  .quantity {
    padding: .5rem 1rem;
    border: 2px solid ${({theme}) => theme.color.gray};
    margin: 0 .2rem;
    font-weight: 700;
  }

  .color {
    display: inline-block;
    width: 1.2em;
    height: 1.2em;
    border-radius: 50%;
    margin: 0 .5rem;
  }

  .color-selected {
    transform: scale(1.5);
    box-shadow: 0 0 15px rgba(0,0,0,.7);
  }

  .description {
    text-transform: initial;
    float: right;
  }
`;