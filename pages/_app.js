import React from 'react';
import { ThemeProvider } from 'styled-components';
import '../styles.css';

const theme = {
  color: {
    dark: '#121b22',
    primary: '#fafafa',
    secondary: '#b94a3e',
    default: '#204254',
    tercero: "#957557",
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
