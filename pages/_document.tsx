import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body data-theme="light">
          <Main />
          <NextScript />
          <script src="iconify.min.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument