import styled from 'styled-components';

export const ItemsProducts = styled.div`
  padding: .5rem 0;
  overflow: hidden;
  background: transparent;
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${({ modeMobile }) => (modeMobile ? '160px' : '200px')}, 1fr)
  );
  grid-gap: ${({ modeMobile }) => (modeMobile ? '1rem' : '2rem')};
  justify-content: space-evenly;
`;

export const ItemProduct = styled.a`
  margin: auto;
  min-width: 160px;
  max-width: 200px;
  height: ${({ modeMobile }) => (modeMobile ? '250px' : '280px')};
  border: 1px solid #ddd;
  background: #fff;
  border-radius: 5px;
  padding: 1rem;
  box-shadow: 0px 0 4px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0 4px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0px 0 4px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0px 0 4px rgba(0, 0, 0, 0.3);

    img {
      transition: all 0.5s ease;
      transform: scale(1.08);
    }
  }

  figure {
    height: 60%;
    border-bottom: 2px solid ${(props) => props.theme.color.gray};
  }

  img {
    width: 100%;
    max-height: 100%;
  }
`;

export const ItemInfo = styled.section`
  padding-top: 1rem;
  text-align: center;

  h3 {
    font-size: 0.8em;
    letter-spacing: 1.5px;
    text-transform: capitalize;
    color: ${(props) => props.theme.color.tercero};
    font-weight: 400;
    margin-top: 1rem;
  }

  p {
    font-weight: 600;
    font-size: 1.2em;
    color: ${(props) => props.theme.color.dark};
  }
`;
