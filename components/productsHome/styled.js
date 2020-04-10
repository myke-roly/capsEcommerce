import styled from 'styled-components';

export const ItemsProducts = styled.div`
  padding: 4rem 0;
  overflow: hidden;

  & > div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(${({modeMobile}) => modeMobile ? '160px' : '250px'}, 1fr));
    grid-gap: 1rem;
    justify-content: space-evenly;
  }

  p {
    text-align: center;
    margin-top: 2rem;
  }
`;

export const ItemProduct = styled.section`  /** attrs({href:"!#"}) */
  /* height: 400px; */
  background: ${(props) => props.theme.color.primary};
  /* border-radius: 7px; */
  box-shadow: 0px 0 7px rgba(0, 0, 0, 0.2);
  
  &:hover  img{
    transition: all .5s ease;
    transform: scale(1.1);

  }

  img {
    width: 100%;
    min-height: 165px;
    padding: .5rem;
  }
`;

export const ItemInfo = styled.section`
 padding: .5em;
 padding-bottom: 1.5rem;
 text-align: center;

  h3 {
    font-size: .8em;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: ${(props) => props.theme.color.default};
    font-weight: 400;
  }

  p {
    font-weight: 700;
    font-size: .9em;
    color: ${(props) => props.theme.color.dark};
    margin: .5em 0;
  }

  a {
    color: ${(props) => props.theme.color.secondary};
    font-size: .6em;
    border: 2px solid;
    padding: .3rem .4rem;
    border-radius: 50px;
  }
`;
