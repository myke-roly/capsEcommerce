import styled from 'styled-components';

export const ItemsProducts = styled.div`
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
  margin: auto;
  min-width: 160px;
  max-width: 200px;
  
  &:hover {
    img {
      transition: all 0.5s ease;
      transform: scale(1.05);
    }
  }

  figure {
    height: 100%;
    min-height: 150px;
    /* background: ${(props) => props.theme.color.primary}; */
    border: 1px solid ${(props) => props.theme.color.gray};
    border-radius: 7px;
    box-shadow: 0px 0 10px rgba(0, 0, 0, 0.3);
    padding: 1rem;
  }

  img {
    width: 100%;
    max-height: 150px;
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
