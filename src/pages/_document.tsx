import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(context: DocumentContext) {
    const initialProps = await Document.getInitialProps(context)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <script defer data-domain="zetter.gallery" src="https://plausible.io/js/plausible.js" />
          <meta name="viewport" content="width=device-width, user-scalable=no initial-scale=1.0, viewport-fit=cover" />
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
