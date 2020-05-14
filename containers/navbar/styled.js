import styled from 'styled-components';

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background: ${props => props.theme.color.primary};
  color: ${props => props.theme.color.dark};
  padding: 0.6rem 0;
  box-shadow: 0px -7px 10px rgba(0, 0, 0, 0.55);
  z-index: 100;
  overflow: hidden;

  @media (max-width: 900px) {
    font-size: 14px;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
      color: ${({ theme }) => theme.color.dark};
      margin: 0 0.7rem;
      cursor: pointer;
      font-size: .7em;
    }
  }

  .user {
    color: ${props => props.theme.color.default};
    text-transform: uppercase;
    font-size: .7em;
    font-weight: 700;
    padding: .2rem .5rem;
  }
  .logout {
    color: ${props => props.theme.color.default};
    background: ${props => props.theme.color.default};
    font-size: .55em;
    color: ${props => props.theme.color.primary};
    padding: .5em .8em;
    cursor: pointer;
  }
`;

export const Links = styled.ul`
  display: flex;

  /* @media (max-width: 900px) {
    display: none;
  } */

  li {
    margin-left: .8rem;

    a {
      background: transparent;
      color: #000;
      font-size: 0.7em;
      font-weight: 500;
      text-transform: uppercase;
      padding: 0.5rem .7rem;
      transition: color .3s ease;

      &:hover {
        color: ${({ theme }) => theme.color.tercero};
        border-bottom: 1px solid ${({ theme }) => theme.color.tercero};
      }

      &.active {
        background: red;
        color: white;
      }
    }
  }
`;

export const Title = styled.h1`
  text-transform: uppercase;
  font-size: 1.2em;
  letter-spacing: 0.3rem;

  a {
    color: ${({ theme }) => theme.color.dark};

    small {
      font-size: 0.7em;
    }
  }
`;

export const CartItem = styled.span`
  position: relative;

  span {
    color: ${({ theme }) => theme.color.secondary};
    border-radius: 50%;
    text-align: center;
    font-size: 0.685rem;
    height: 15px;
    width: 15px;
    font-weight: bold;
    position: absolute;
    top: -20%;
    right: 0;
  }
`;
