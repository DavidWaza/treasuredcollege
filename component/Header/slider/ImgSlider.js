import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import navStyles from "../../../styles/Header.module.css";
import Image from "next/image";
// import Logo from '../../../images/logo.jpg'
import Imgone from "../../../images/1.jpg";
import Imgthree from "../../../images/3.jpg";
import Imgfour from "../../../images/4.jpg";

const images = [Imgone,  Imgthree, Imgfour];

const ImgSlider = () => {
  return (
    <div className="slide-container">
        <div className={`${navStyles.Content}`}>
            <p className={`${navStyles.h3}`}>Welcome to</p>
            <p className={`${navStyles.h1}`}>Treasured Heritage College</p>
            <p className={`${navStyles.p}`}>A Christian Montessori School</p>
        </div>
      <Zoom scale={0.4}>
        {images.map((each, index) => (
          <div key={index} className={`${navStyles.Slider}`}>
            <Image src={each} alt="" />
          </div>
        ))}
      </Zoom>
    </div>
  );
};
export default ImgSlider;
