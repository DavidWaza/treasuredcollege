import "../styles/globals.css";
import Nav from "../component/Header/Nav";
import ImgSlider from "../component/Header/slider/ImgSlider";
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <Nav />
      <ImgSlider />
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
