import React, { useEffect } from 'react';
// import '../styles.css';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import MobileContext from '../context/MobileContext';
import AuthContext from '../context/AuthContext';
import MessageContext from '../context/MessageContext';
import SearchContext from '../context/SearchContext';
import ProductsContext from '../context/ProductsContext';
import MPContext from '../context/MPContext';
import { authToken } from '../API/token';
import Cookie from 'js-cookie';
import { SWRConfig } from 'swr';

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

const GlobalStyleds = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins:200,400,500,600,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background: #fff;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  img {
    width: 100%;
  }
`;

export default ({ Component, pageProps }) => {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) authToken(token);
    if (!Cookie.get('IDItem')) Cookie.set('IDItem', []);
  }, []);

  return (
    <MobileContext>
      <SWRConfig
        value={{
          fetcher: (url) => axiosFetch(url).then((response) => response.data),
        }}
      >
        <MPContext>
          <SearchContext>
            <ProductsContext>
              <AuthContext>
                <MessageContext>
                  <GlobalStyleds />
                  <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                  </ThemeProvider>
                </MessageContext>
              </AuthContext>
            </ProductsContext>
          </SearchContext>
        </MPContext>
      </SWRConfig>
    </MobileContext>
  );
};
