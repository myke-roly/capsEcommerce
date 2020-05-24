import styled from 'styled-components';

export const ItemsInfo = styled.section`
  background: ${props => props.theme.color.dark};
  padding: 1.5em 1em;
  border-bottom: 2px solid gray;

  @media (max-width: 720px) {
    font-size: 14px;
  }

  & > div {
    text-align: center;

    div.lkzQmO {
      background: ${props => props.theme.color.dark};
      padding: .5rem 0;
      svg {
        color: ${props => props.theme.color.default};
      }
    }
  }
`;

export const Items = styled.section`
  border-right: 1px solid #333;

  svg {
    color: ${props => props.theme.color.gray} !important;
    border: 2px solid ${props => props.theme.color.gray};
    border-radius: 50%;
    padding: 0.5rem;
    font-size: 2.5em;
  }

  span {
    display: block;
    color: #686868;
    font-size: 0.75em;
    font-weight: 400;
    text-transform: uppercase;
    margin-top: 0.8rem;
  }
`;
