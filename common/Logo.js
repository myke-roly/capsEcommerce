import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Title = styled.h1`
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

export const Logo = () => {
  return (
    <Title>
      <Link href="/">
        <a>
          Caps <small>.:: o</small>
        </a>
      </Link>
    </Title>
  );
};
