// https://nextjs.org/docs/basic-features/built-in-css-support#adding-a-global-stylesheet
import "../styles.scss";
import "../components/Header/Header.scss";
import "../components/Footer/Footer.scss";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
