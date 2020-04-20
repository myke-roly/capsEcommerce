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
    }
  }

  .user {
    text-transform: uppercase;
    font-size: .8rem;
    font-weight: 700;
    border: 2px solid ${props => props.theme.color.dark};
    padding: .2rem .5rem;  
  }
`;

export const Links = styled.ul`
  display: flex;

  /* @media (max-width: 900px) {
    display: none;
  } */

  li {
    margin-left: 1rem;

    a {
      background: transparent;
      color: #000;
      font-size: 0.7em;
      font-weight: bold;
      text-transform: uppercase;
      padding: 0.5rem 1rem;
      transition: color .3s ease;

      &:hover {
        color: ${({ theme }) => theme.color.tercero};
        border-top: 2px solid ${({ theme }) => theme.color.tercero};
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
    top: -30%;
    right: 0;
  }
`;
