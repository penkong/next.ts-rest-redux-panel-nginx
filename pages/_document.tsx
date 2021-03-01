// ----------------------------------- Packages ------------------------------------

import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentProps,
  DocumentContext
} from 'next/document'

// ----------------------------------- Locals ------------------------------------

// ----------------------------------- ------ ------------------------------------

// Document is only rendered in the server, event handlers like onClick won't work.
export default class MyDocument extends Document<DocumentProps> {
  renderDocument() {}
  render() {
    return (
      <Html lang="en">
        {/*can use DOMAttributes*/}
        <Head>
          <head>
            <meta charSet="utf-8" />
            <meta name="text" content="" />
            <meta name="author" content="" />
            <meta name="description" content="" />
            <meta name="keywords" content="" />
            <title>From Document</title>
            <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <link rel="shortcut icon" href="favicon.ico" />
            <link rel="icon" href="favicon.ico" type="image/x-icon" />
            <link
              rel="apple-touch-icon"
              href="images/apple-touch-icon-57x57.html"
            />
            <link
              rel="apple-touch-icon"
              sizes="72x72"
              href="images/apple-touch-icon-72x72.html"
            />
            <link
              rel="apple-touch-icon"
              sizes="114x114"
              href="images/apple-touch-icon-114x114.html"
            />
            {/* <link rel="stylesheet" href="/css/uikit.min.css" /> */}
            {/* <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script> */}
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.3/tailwind.min.css"
              integrity="sha512-wl80ucxCRpLkfaCnbM88y4AxnutbGk327762eM9E/rRTvY/ZGAHWMZrYUq66VQBYMIYDFpDdJAOGSLyIPHZ2IQ=="
              crossOrigin="anonymous"
            />
          </head>
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* <script src="/js/jquery.min.js"></script> */}
        </body>
      </Html>
    )
  }
}

// -------------------------------------------------------------------

// ctx.renderPage() is for usage with css-in-js libraries that need to
// wrap the application to properly work with server-side rendering.
MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  // console.log(ctx)
  const initialProps = await Document.getInitialProps(ctx)
  return { ...initialProps }
}
