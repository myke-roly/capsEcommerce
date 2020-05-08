import styled, { keyframes } from 'styled-components';

const animateSearch = keyframes`
  from {width: 0;}
  to {width: 250px;}
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
    padding: .2rem .5rem;
    border: none;
    background: transparent;
    font-size: .7em; 
    border: 2px solid ${({theme}) => theme.color.default};
    animation: ${animateSearch} .5s ease;
    border-radius: 50px;
  }

  label {
    font-size: 1em;
    position: absolute;
    right: 0;
    top: .1rem;
  }
`;

export const ResultSearch = styled.section`
  /* border: 2px solid red; */
  position: fixed;
  top: 8vh;
  left: 0;
  width: 100%;
  background: ${({theme}) => theme.color.gray};
  padding: 1rem;
  animation: ${animateSearchResults} .5s ease;
`;
