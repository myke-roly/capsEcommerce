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
  box-shadow: 0px 0 10px rgba(0, 0, 0, 0.3);
  /* background: ${(props) => props.theme.color.gray}; */
  &:hover {
    border-radius: 7px;
    background: white;
    color: white;

    img {
      transition: all 0.5s ease;
      transform: scale(1.1);
    }
  }

  img {
    width: 100%;
    min-height: 165px;
    padding: 0.7rem;
  }
`;

export const ItemInfo = styled.section`
  padding: 1rem;
  padding-left: ${(props) => (props.modeMobile ? '1rem' : '2rem')};
  padding-bottom: 1.5rem;

  h3 {
    font-size: 0.8em;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: ${(props) => props.theme.color.default};
    font-weight: 400;
  }

  p {
    font-weight: 700;
    font-size: 1em;
    color: ${(props) => props.theme.color.dark};
    margin: 1em 0;
  }

  a {
    color: ${(props) => props.theme.color.secondary};
    font-size: 0.7em;
    border: 2px solid;
    padding: 0.3rem 0.4rem;
    border-radius: 50px;
  }
`;
