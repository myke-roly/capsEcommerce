import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';

const MyDocument = () => {

  
}

MyDocument.getInitialProps = ctx => {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () => {
      originalRenderPage({
        enchangeApp: App => props => sheet.collectStyles(<App {...props} />)
      })
    }

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      )
    }
  }
  finally {
    sheet.seal();
  }
}

export default MyDocument;


