import styled from 'styled-components';

export const WrapperAbout = styled.div`
  background: ${props => props.theme.color.primary};
  width: 100%;
  padding: 2rem;

  @media (max-width: 720px) {
    font-size: 14px;
  }

`;

export const FlexDescription = styled.section`
  display: ${props => props.modeMobile ? 'block' : 'flex'};
  justify-content: center;

  .about-description {
    padding: 1rem;
    width: 100%;
    
    p {
      padding: ${props => props.modeMobile ? '0' : '2rem'};
      color: ${props => props.theme.color.default};
      font-size: .8em;
      letter-spacing: 1.1px;
      line-height: 1.5rem;
    }
  }

  figure {
    display: block;
    width: 100%;

    img {
      box-shadow: -7px 7px 10px 0 rgba(0,0,0,.5);
    }
  }
`;