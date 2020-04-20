import React from 'react';
import { ThemeProvider } from 'styled-components';
import '../styles.css';
import MobileContext from '../context/MobileContext';
import AuthContext from '../context/AuthContext';
import MessageContext from '../context/MessageContext';

const theme = {
  color: {
    dark: '#121b22',
    primary: '#fafafa',
    gray: '#eeeeee',
    secondary: '#b94a3e',
    default: '#204254',
    tercero: '#957557',
    error: '#CB2431',
    success: '#909012',
  },
};

export default ({ Component, pageProps }) => {
  return (
    <MobileContext>
      <AuthContext>
        <MessageContext>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </MessageContext>
      </AuthContext>
    </MobileContext>
  );
};
