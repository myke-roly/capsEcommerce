import styled from 'styled-components';

export const Nav = styled.nav`
  position: sticky;
  height: 3rem;
  top: 0;
  left: 0;
  width: 100%;
  background: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.dark};
  box-shadow: 0px -7px 10px rgba(0, 0, 0, 0.55);
  z-index: 100;
  overflow: hidden;
  padding: 0.7rem 0;

  @media (max-width: 900px) {
    font-size: 14px;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  svg {
    color: ${({ theme }) => theme.color.dark};
    margin: 0 0.5rem;
    cursor: pointer;
    width: 15px;
  }

  .user {
    color: ${(props) => props.theme.color.default};
    text-transform: uppercase;
    font-weight: 400;
    padding: 0 0.5em;
  }

  .logout {
    color: ${(props) => props.theme.color.default};
    font-size: 0.55em;
    border-bottom: 1px solid ${(props) => props.theme.color.default};;
    cursor: pointer;
  }
`;

export const Links = styled.ul`
  display: flex;
  li {
    margin-left: 1rem;

    a {
      background: transparent;
      color: #000;
      font-size: 0.7em;
      font-weight: 500;
      text-transform: capitalize;
      transition: color 0.3s ease;

      &:hover {
        color: ${(props) => props.theme.color.secondary};
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
  letter-spacing: 0.2rem;

  a {
    color: ${({ theme }) => theme.color.dark};

    small {
      font-size: 0.5em;
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
