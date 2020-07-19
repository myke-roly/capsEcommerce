import styled from 'styled-components';

export const LabelIcon = styled.label`
  position: relative;
  top: 0;
`;

export const SearchWrapper = styled.div`
  height: ${({ modeMobile }) => (modeMobile ? '3rem' : '')};
  width: ${({ modeMobile }) => (modeMobile ? '100%' : '')};;
  background: ${({ theme }) => theme.color.primary};
  position: ${({ modeMobile }) => (modeMobile ? 'fixed' : '')};
  top: 3rem;
  left: 0;

  input {
    width: ${({ modeMobile }) => (modeMobile ? '90%' : '300px')};
    margin: auto;
    padding: 0.4rem 0.5rem;
    background: white;
    font-size: 0.8em;
    border-radius: 7px;
    border: 2px solid ${({ theme }) => theme.color.gray};
    /* text-transform: uppercase; */
  }
`;

export const ResultSearch = styled.section`
  position: fixed;
  top: ${({ modeMobile }) => (modeMobile ? '16vh' : '3rem')};
  left: 0;
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.color.primary};
  transition: 0.5s ease;

  a {
    width: 90%;
    margin: auto;
    display: block;
    font-weight: 400;
    font-size: 0.8em;
    /* text-align: center; */
    text-transform: uppercase;
    padding: 0.6rem 0;
    color: ${({ theme }) => theme.color.dark};

    &:hover {
      background: ${({ theme }) => theme.color.gray};
    }
  }
`;
