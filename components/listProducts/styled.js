import styled from 'styled-components';

export const ItemsProducts = styled.div`
  background: ${(props) => props.theme.color.primary};
  padding: 4rem 0;
  overflow: hidden;

  & > div {
    display: grid;
    grid-template-columns: repeat(
      auto-fit,
      minmax(${({ modeMobile }) => (modeMobile ? '160px' : '250px')}, 1fr)
    );
    grid-gap: ${({ modeMobile }) => (modeMobile ? '1rem' : '3rem')};
    justify-content: space-evenly;
  }
`;

export const ItemProduct = styled.section`
  /** attrs({href:"!#"}) */
  /* height: 400px; */
  &:hover {
    img {
      transition: all 0.5s ease;
      transform: scale(1.05);
    }
  }

  figure {
    height: 100%;
  }

  img {
    box-shadow: 0px 0 10px rgba(0, 0, 0, 0.3);
    border: 2px solid ${(props) => props.theme.color.dark};
    /* border-radius: 7px; */
    width: 100%;
    min-height: 180px;
    padding: 0.7rem;
  }
`;

export const ItemInfo = styled.section`
  padding: 0.5rem;
  padding-left: ${(props) => (props.modeMobile ? '1rem' : '2rem')};
  text-align: center;

  h3 {
    font-size: 0.8em;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: ${(props) => props.theme.color.default};
    font-weight: 400;
  }

  p {
    font-weight: 500;
    font-size: 1em;
    color: ${(props) => props.theme.color.dark};
  }

  a {
    color: ${(props) => props.theme.color.secondary};
    font-size: 0.7em;
    border: 2px solid;
    padding: 0.3rem 0.4rem;
    border-radius: 50px;
  }
`;
