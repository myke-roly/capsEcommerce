import styled from 'styled-components';

export const WrapperMain = styled.main`
  color: ${({ theme }) => theme.color.default};
  background: ${({ theme }) => theme.color.primary};
`;

export const WrapperGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;
  align-items: center;


  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: .8fr 1fr .8fr;
    font-size: 14px;
  }

  img {
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  .section-content {
    padding: 2.5em 2em;
    /* text-align: center; */

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
  padding: 3rem 0;

  @media (max-width: 900px) {
    font-size: 14px;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25%, 180px));
    align-items: center;
    justify-content: space-center;
    text-align: center;

    li {
      margin: 1rem;
      color: white;

      svg {
        color: ${props => props.theme.color.tercero};
        font-size: 2em;
      }

      span {
        display: block;
        color: ${props => props.theme.color.primary};
        opacity: 0.7;
        font-size: 0.8em;
        margin-top: 1rem;
      }
    }
  }
`;
