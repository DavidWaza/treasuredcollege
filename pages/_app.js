import "../styles/globals.css";
import Nav from "../component/Header/Nav";
import ImgSlider from "../component/Header/slider/ImgSlider";

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
