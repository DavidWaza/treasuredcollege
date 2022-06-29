import "../styles/globals.css";
import Nav from "../component/Header/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../component/Footer/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <Nav />
      <Component {...pageProps} />
      {/* <Footer /> */}
    </main>
  );
}

export default MyApp;
