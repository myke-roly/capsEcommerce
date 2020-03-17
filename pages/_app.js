import React from 'react';
import { ThemeProvider } from 'styled-components';
import '../styles.css';

const theme = {
  color: {
    white: 'red',
    dark: 'green'
  }
};

export default ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />;
    </ThemeProvider>
  );
};
