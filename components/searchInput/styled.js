import styled, { keyframes } from 'styled-components';

const animateSearch = keyframes`
  from {width: 0;}
  to {width: auto;}
`;
const animateSearchResults = keyframes`
  from {height: 0;}
  to {height: auto;}
`;

export const SearchWrapper = styled.div`
  position: relative;

  input {
    display: inline-block;
    width: 250px;
    padding: 0.2rem 0.5rem;
    border: none;
    background: transparent;
    font-size: 0.7em;
    border: 2px solid ${({ theme }) => theme.color.default};
    animation: ${animateSearch} 0.5s ease;
    border-radius: 50px;
  }

  label {
    position: relative;
    right: 0;
    top: 0.35rem;
  }
`;

export const ResultSearch = styled.section`
  position: fixed;
  top: 3rem;
  left: 0;
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.color.gray};
  animation: ${animateSearchResults} .5s ease;

  a {
    display: block;
    font-weight: 400;
    font-size: .8em;
    text-align: center;
    text-transform: uppercase;
    padding: .6rem 0;
    color: ${({ theme }) => theme.color.dark};

    &:hover {
      background: ${({ theme }) => theme.color.primary};
    }
  }
`;
