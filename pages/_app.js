import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
// import "../styles/sandbox.scss";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
