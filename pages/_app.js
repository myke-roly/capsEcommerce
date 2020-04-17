import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import '../styles.css';
import MobileContext from '../context/MobileContext';
import AuthContext from '../context/AuthContext';

const theme = {
  color: {
    dark: '#121b22',
    primary: '#fafafa',
    gray: '#eeeeee',
    secondary: '#b94a3e',
    default: '#204254',
    tercero: '#957557',
    error: 'red',
    success: '#909012'
  }
};

export default ({ Component, pageProps }) => {

  return (
    <MobileContext>
      <AuthContext>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthContext>
    </MobileContext>
  );
};
