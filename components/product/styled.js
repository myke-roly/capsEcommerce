import styled from 'styled-components';

export const WrapperProduct = styled.div`
  max-width: 960px;
  margin: 1rem auto;
  display: ${props => props.modeMobile ? 'block' : 'flex' };;
  justify-content: space-evenly;
  align-items: center;
  padding: ${props => props.modeMobile ? '2rem 0' : '2rem' };

  @media (max-width: 720px) {
    font-size: 16px;
  }
`;

export const Images = styled.section`
  width: 100%;
  max-width: 450px;
  margin: auto;
  padding: 2rem;

  img {
    width: 100%;
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
`;

export const Section = styled.section`
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;

  h4 {
    color: ${({theme}) => theme.color.default};
    font-weight: 400;
    font-size: .8em;
  }

  p {
    color: ${({theme}) => theme.color.dark};
    font-size: .8em;
    opacity: .8;
    font-weight: 400;
    text-transform: uppercase;
    line-height: 1.5rem;
  }

  .quantity {
    padding: .5rem 1rem;
    border: 2px solid ${({theme}) => theme.color.gray};
    margin: 0 .2rem;
  }

  .price {
    font-size: 1.5rem;
    color: ${({theme}) => theme.color.dark};
    font-weight: bold;
  }

  .color {
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    border-radius: 50%;
    margin: 0 .5rem;
  }

  .description {
    text-transform: initial;
    float: right;
  }
`;