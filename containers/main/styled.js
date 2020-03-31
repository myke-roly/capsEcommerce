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
    grid-template-rows: 0.8fr 1fr 0.8fr;
    font-size: 14px;
  }

  img {
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  .section-content {
    padding: 3em 2em;
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
    padding: .7rem;
    font-size: 3em;
  }

  span {
    display: block;
    color: ${props => props.theme.color.tercero};
    font-size: 0.9em;
    font-weight: 700;
    text-transform: uppercase;
    margin: .8rem 0;
  }

  p {
    font-size: .75em;
    color: ${props => props.theme.color.primary};
    opacity: .7;
    letter-spacing: 1px;
  }
`;

export const ItemsImages = styled.div`
  background: ${props => props.theme.color.primary};
  height: 300px;
  
  img {
    border-radius: 30px;
    padding: 2em;
    height: 300px;
  }
`;

export const ImgagesSlider = styled.div`
  /* .thumbs {
    display: none;
  } */
`;

export const ImageSliders = styled.div`
  /* display: flex; */
  grid-template-columns: 1fr 1fr 1fr;
  align-content: center;
  justify-content: center;
  width: 100%;
  height: 300px;
  background: ${props => props.theme.color.primary};

  img {
    display: inline-block;
    width: 33% !important;
    height: 100%;
    padding: .5rem;
    border-radius: 20px;

    @media (max-width: 720px) {
      width: 100% !important;
    }
  }
`;
