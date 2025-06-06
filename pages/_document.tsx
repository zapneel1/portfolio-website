import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          {/*  */}
          <meta
            name="theme-color"
            media="(prefers-color-scheme: light)"
            content="#020e1828"
          />
          <meta
            name="theme-color"
            media="(prefers-color-scheme: dark)"
            content="#020e1828"
          />
          <meta content="#020e1828" name="msapplication-TileColor" />
          <meta content="/meta/browserconfig.xml" name="msapplication-config" />
          <meta name="yandex-verification" content="513eaa5344e9eec7" />
          <meta
            name="google-site-verification"
            content="Fh-a5Ud6Km37K5O1XC5I9DVJFAuNHTsYKprT8jNBkeg"
          />
          <meta
            content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
            name="robots"
          />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
