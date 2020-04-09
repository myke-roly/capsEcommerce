import styled from 'styled-components';

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
    padding: 0.7rem;
    font-size: 3em;
  }

  span {
    display: block;
    color: ${props => props.theme.color.tercero};
    font-size: 0.9em;
    font-weight: 700;
    text-transform: uppercase;
    margin: 0.8rem 0;
  }

  p {
    font-size: 0.75em;
    color: ${props => props.theme.color.primary};
    opacity: 0.7;
    letter-spacing: 1px;
  }
`;
