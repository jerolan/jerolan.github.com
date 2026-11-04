import Document, { Head, Html, Main, NextScript } from "next/document";
import { themeInitializationScript } from "../lib/theme";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          <script
            dangerouslySetInnerHTML={{ __html: themeInitializationScript }}
          />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-64555470-7"
          />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', 'UA-64555470-7');
              `,
            }}
          />
          <meta name="robots" content="follow, index" />
        </Head>
        <body id="top">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
