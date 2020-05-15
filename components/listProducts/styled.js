import styled from 'styled-components';

export const ItemsProducts = styled.div`
  background: ${(props) => props.theme.color.primary};
  padding: 4rem 0;
  overflow: hidden;

  & > div {
    display: grid;
    grid-template-columns: repeat(
      auto-fit,
      minmax(${({ modeMobile }) => (modeMobile ? '160px' : '200px')}, 1fr)
    );
    grid-gap: ${({ modeMobile }) => (modeMobile ? '1rem' : '2rem')};
    justify-content: space-evenly;
  }
`;

export const ItemProduct = styled.section`
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
    /* border: 1px solid ${(props) => props.theme.color.dark}; */
    border-radius: 7px;
    width: 100%;
    height: 200px;
    padding: 0.7rem;
  }
`;

export const ItemInfo = styled.section`
  padding: 0.5rem;
  padding-left: ${(props) => (props.modeMobile ? '1rem' : '2rem')};
  text-align: center;

  h3 {
    font-size: 0.8em;
    letter-spacing: 1.6px;
    text-transform: capitalize;
    color: ${(props) => props.theme.color.default};
    font-weight: 500;
  }

  p {
    font-weight: 600;
    font-size: 1em;
    color: ${(props) => props.theme.color.dark};
  }

  a {
    color: ${(props) => props.theme.color.tercero};
    font-size: 0.7em;
    border: 2px solid;
    padding: 0.2rem 0.4rem;
  }
`;
