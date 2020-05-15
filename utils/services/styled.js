import styled from 'styled-components';

export const ItemsInfo = styled.section`
  background: ${props => props.theme.color.dark};
  padding: 2.5em 1em;
  border-bottom: 1px solid gray;

  @media (max-width: 900px) {
    font-size: 14px;
  }

  & > div {
    text-align: center;
    padding: 0 1rem;

    svg {
      color: ${props => props.theme.color.gray};
    }
  }
`;

export const Items = styled.div`
  svg {
    color: ${props => props.theme.color.gray} !important;
    border: 2px solid ${props => props.theme.color.default};
    border-radius: 50%;
    padding: 0.7rem;
    font-size: 3em;
  }

  span {
    display: block;
    color: ${props => props.theme.color.primary};
    font-size: 0.8em;
    font-weight: 400;
    text-transform: uppercase;
    margin: 0.8rem 0;
  }
`;
