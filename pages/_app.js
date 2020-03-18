import React from 'react';
import { ThemeProvider } from 'styled-components';
import '../styles.css';

const theme = {
  color: {
    dark: 'black',
    primary: '#fafafa',
    secondary: 'blue',
    default: 'gray',
    error: 'red',
    success: '#909012'
  }
};

export default ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />;
    </ThemeProvider>
  );
};
