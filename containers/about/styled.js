import styled from 'styled-components';

export const WrapperAbout = styled.main`
  background: ${props => props.theme.color.gray};
  width: 100%;
  min-height: 100vh;
  @media (max-width: 900px) {
    font-size: 14px;
  }
`;

export const FlexDescription = styled.section`
  display: ${props => props.modeMobile ? 'block' : 'flex'};
  justify-content: center;
  align-items: center;
  padding: ${props => props.modeMobile ? '1rem' : '3rem' };

  .about-description {
    width: 100%;
    padding: 1rem;
    padding-left: 2rem;

      p {
        margin-top: 2.5rem;
        color: ${props => props.theme.color.default};
        font-size: .85em;
        letter-spacing: 1.5px;
        line-height: 1.5rem;
      }
  }

  img {
    /* padding: 1rem; */
    width: 100%;
    border-radius: 20px;
  }
`;