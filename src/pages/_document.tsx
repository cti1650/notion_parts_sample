import Document, { Html, Head, Main, NextScript,DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html lang="ja" className="bg-opacity-0">
        <Head />
        <body className="bg-opacity-0">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument