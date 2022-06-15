import About from '../component/About/index'
import Goals from '../component/Goals/index'
import dynamic from "next/dynamic";
import Admission from '../component/Application/index'
import Update from '../component/Updates/Index'

const FacilityWithNoSSR = dynamic(() => import("../component/Facilities/Index"), {
  ssr: true,
});

const Home = () => {
  return(
    <main>
    <About />
    <Goals />
    <FacilityWithNoSSR />
    <Admission />
    <Update />
    </main>
  )
}

export default Home;
