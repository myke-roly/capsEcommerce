import styled, { keyframes } from 'styled-components';

const toBottom = keyframes`
  from {
    transform: translateX(100%);
  };
  to {
    transform: translateX(0);
  };
`;

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background: ${props => props.theme.color.primary};
  color: ${props => props.theme.color.dark};
  padding: 0.6rem 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.55);
  z-index: 100;
  position: relative;
  height: auto;

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
    }
  }
`;

export const Links = styled.ul`
  display: flex;

  @media (max-width: 900px) {
    display: none;
  }

  li {
    margin-left: 1rem;

    a {
      background: transparent;
      color: #000;
      font-size: 0.7em;
      font-weight: bold;
      text-transform: uppercase;
      padding: 0.5rem 1rem;
      transition: color 3s ease;

      &:hover {
        color: ${({ theme }) => theme.color.dark};
        border-top: 2px solid ${({ theme }) => theme.color.dark};
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

export const MenuMobile = styled.div`
  background: ${({ theme }) => theme.color.primary};
  margin-bottom: -1rem;
  padding: 2rem;
  text-align: center;
  width: 100%;
  animation: ${toBottom} .5s ease-in-out;
  z-index: 1;

  ul {
    width: 100%;
    padding-top: 1rem;

    li {
      margin-bottom: 1rem;
      padding: 0.55rem 0;
      width: 100%;
      background: ${({ theme }) => theme.color.default};
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

      a {
        color: ${({ theme }) => theme.color.primary};
        text-transform: uppercase;
        font-size: 0.85em;
        width: inherit;
      }
    }

    svg {
      color: ${({ theme }) => theme.color.dark};
      font-size: 1.35rem;
      margin-top: 1rem;
      margin-left: 1rem;
    }
  }
`;
