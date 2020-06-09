import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import '../styles.css';
import MobileContext from '../context/MobileContext';
import AuthContext from '../context/AuthContext';
import MessageContext from '../context/MessageContext';
import SearchContext from '../context/SearchContext';
import ProductsContext from '../context/ProductsContext';
import MPContext from '../context/MPContext';
import { authToken } from '../API/token';
import Cookie from 'js-cookie';

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
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) authToken(token);
    if(!Cookie.get('IDItem')) Cookie.set('IDItem', [])
  }, []);

  return (
    <MobileContext>
      <MPContext>
        <SearchContext>
          <ProductsContext>
            <AuthContext>
              <MessageContext>
                <ThemeProvider theme={theme}>
                  <Component {...pageProps} />
                </ThemeProvider>
              </MessageContext>
            </AuthContext>
          </ProductsContext>
        </SearchContext>
      </MPContext>
    </MobileContext>
  );
};
