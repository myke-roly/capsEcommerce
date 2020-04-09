import styled from 'styled-components';

export const WrapperMain = styled.main`
  color: ${({ theme }) => theme.color.default};
`;

export const WrapperGrid = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
    background: ${({ theme }) => theme.color.primary};

  @media (max-width: 900px) {
    font-size: 14px;
    flex-direction: column-reverse;
  }

  img {
    display: inline-block;
    width: 100%;
    min-height: 100%;
  }

  .section-content {
    padding: 3em 2em;
    text-align: center;

    h2 {
      font-size: 1.2em;
      text-transform: uppercase;
    }

    p {
      opacity: 0.75;
      font-size: 0.85em;
      letter-spacing: 0.05rem;
      line-height: 2em;
      margin: 2em 0;
    }
  }
`;


