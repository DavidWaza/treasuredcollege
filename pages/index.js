import About from '../component/About/index'
import Goals from '../component/Goals/index'
import dynamic from "next/dynamic";

const FacilityWithNoSSR = dynamic(() => import("../component/Facilities/Index"), {
  ssr: true,
});

const Home = () => {
  return(
    <main>
    <About />
    <Goals />
    <FacilityWithNoSSR />
    </main>
  )
}

export default Home;
