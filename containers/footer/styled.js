import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background: #000;
  padding: 1.5rem 0;
  color: white;
  text-align: center;

  p {
    font-size: .8em;
  }
`;

export const FooterSocial = styled.address`
  padding: 1rem 0;

  a {
    color: ${props => props.theme.color.primary};
    margin-left: 1rem;

    span {
      display: none;
      /* font-size: .5em; */
    }

    svg {
      font-size: 1.2em;

      &:hover {
        transform: scale(1.2);
        color: tomato;
      }
    }
  }
`;

export const Flags = styled.div`
  width: 75%;
  margin: 1rem auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;


  img {
    width: 25px;
    margin: .2rem;
  }
`;
