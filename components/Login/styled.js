import styled, { keyframes } from 'styled-components';

const toBottom = keyframes`
  from {
    top: -100%;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
`;

export const Form = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  z-index: 20000 !important;
  animation: ${toBottom} 1s ease;
  
  form {
    width: ${(props) => (props.modeMobile ? '90%' : '450px')};
    margin: 0 auto;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.7);
    border-radius: 10px;
  }
`;

export const SessionOptions = styled.section`
  display: flex;
  align-items: center;
  width: 100%;

  div {
    display: inline-block;
    color: ${(props) => props.theme.color.primary};
    padding: 1.5rem 0;
    width: 100%;
    text-transform: uppercase;
    text-align: center;
    cursor: pointer;
  }

  .login {
    border-radius: 10px 0 0 0;
    background: ${(props) => props.theme.color.default};
    transition: all 1s ease !important;
  }

  .logout {
    border-radius: 0 10px 0 0;
    background: ${(props) => props.theme.color.dark};
    transition: all 1s ease !important;
  }
`;

export const LoginForm = styled.section`
  background: ${(props) => props.theme.color.gray};
  border-radius: 0 0 10px 10px;
  padding: 3rem 2rem;

  p {
    margin-bottom: 1rem;

    label {
      font-size: .8em;
      color: ${(props) => props.theme.color.secondary};
    }

    input {
      width: 100%;
      padding: 0.6rem 1rem;
      /* background: ${(props) => props.theme.color.primary}; */
      background: transparent;
      border: none;
      border-bottom: 2px solid ${(props) => props.theme.color.default};
      color: ${(props) => props.theme.color.dark};
    }
  }
`;

export const ButtonClose = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 30px;
  height: 5px;
  transform: rotate(45deg);
  background: ${(props) => props.theme.color.primary};
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    background: ${(props) => props.theme.color.primary};
    width: 30px;
    height: 5px;
    transform: rotate(445deg);
  }
`;
