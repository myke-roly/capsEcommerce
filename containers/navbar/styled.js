import styled from 'styled-components';

export const Nav = styled.nav`
  position: sticky;
  height: 3.001rem;
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
  justify-content: space-around;

  li {
    margin: 0 .2em;

    a {
      padding: .5em 1em;
      background: transparent;
      color: ${(props) => props.theme.color.dark};
      font-size: 0.7em;
      font-weight: 400;
      text-transform: capitalize;
      transition: color 0.3s ease;
      &:hover {
        text-decoration: line-through;
      }
      &.active {
        color: ${(props) => props.theme.color.tercero};
        font-weight: 600;
      }
    }
  }
`;

export const CartItem = styled.a`
  position: relative;

  .item-cart {
    color: ${({ theme }) => theme.color.secondary};
    text-align: center;
    padding-left: .5rem;
    font-size: 0.685rem;
    font-weight: bold;
    position: absolute;
    top: -20%;
    right: 0;
  }
`;
