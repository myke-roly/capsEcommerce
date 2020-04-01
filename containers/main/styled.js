import styled from 'styled-components';

export const WrapperMain = styled.main`
  color: ${({ theme }) => theme.color.default};
  background: ${({ theme }) => theme.color.primary};
`;

export const WrapperGrid = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    font-size: 14px;
    flex-direction: column-reverse;
  }

  img {
    display: inline-block;
    width: 100%;
    min-height: 100%;
  }

  .section-content {
    padding: 3em 2em;
    text-align: center;

    h2 {
      font-size: 1.2em;
      text-transform: uppercase;
    }

    p {
      opacity: 0.75;
      font-size: 0.85em;
      letter-spacing: 0.05rem;
      line-height: 2em;
      margin: 2em 0;
    }
  }
`;

export const ItemsInfo = styled.section`
  background: ${props => props.theme.color.dark};
  padding: 4rem 1em;

  @media (max-width: 900px) {
    font-size: 14px;
  }

  & > div {
    text-align: center;
    padding: 0 1rem;

    svg {
      color: ${props => props.theme.color.primary};
    }
  }
`;

export const Items = styled.div`
  svg {
    color: ${props => props.theme.color.primary} !important;
    border: 1.2px solid ${props => props.theme.color.primary};
    border-radius: 50%;
    padding: 0.7rem;
    font-size: 3em;
  }

  span {
    display: block;
    color: ${props => props.theme.color.tercero};
    font-size: 0.9em;
    font-weight: 700;
    text-transform: uppercase;
    margin: 0.8rem 0;
  }

  p {
    font-size: 0.75em;
    color: ${props => props.theme.color.primary};
    opacity: 0.7;
    letter-spacing: 1px;
  }
`;

export const ItemsProducts = styled.div`
  background: ${props => props.theme.color.gray};
  /* height: 400px; */
`;

export const ItemProduct = styled.div`
  background: ${props => props.theme.color.primary};
  margin: 2rem;
  text-align: center;
  box-shadow: 0.5px 0 7px rgba(0, 0, 0, 0.5);
  /* height: 400px; */

  img {
    width: 100%;
    height: 250px;
  }

  h3 {
    padding: 1rem .5rem 0;
    font-size: .9em;
    color: ${props => props.theme.color.dark};
  }

  p {
    margin: 1.5rem 0;
    font-size: 1.2em;

    small {
      color: ${props => props.theme.color.success};
      font-size: 0.6em;
    }
  }
`;
