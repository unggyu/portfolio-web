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
          <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument