import styled from 'styled-components';

export const WrapperMain = styled.main`
  color: ${({ theme }) => theme.color.default};
  background: ${({ theme }) => theme.color.primary};
`;

export const WrapperGrid = styled.section`
  display: flex;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    font-size: 14px;
  }

  .section-content {
    padding: 4em;
    text-align: center;

    h2 {
      font-size: 1.5em;
      text-transform: uppercase;
      margin-bottom: 2rem;
    }

    p {
      opacity: 0.75;
      font-size: .9em;
      letter-spacing: 0.1rem;
      line-height: 2em;
    }
  }
`;
