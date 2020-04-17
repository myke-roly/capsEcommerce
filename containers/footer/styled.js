import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background: #000;
  padding: 1.5rem 0;
  color: white;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const FooterSocial = styled.address`
  a {
    color: ${props => props.theme.color.primary};
    margin-left: 1rem;

    svg {
      font-size: 1.2em;

      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;
