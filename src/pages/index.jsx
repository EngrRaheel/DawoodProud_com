// import Navbar from '../../components/common/Navbar'
import Hero from "../../components/Herosection/Hero";
import ServiceCards from "../../components/Services components/ServiceCards"
import BoostYTV from '../../components/BoostYTV/BoostYTV';
import SuperchargeYT from "../../components/CallToAction/CallToAction";
// import YtSlider from "../../components/YtSlider/Slider";

import Footer from "../../components/common/Footer";
// import TrustPilotReview from "../../components/TrustPilot/TrustPilotReview"



const Home = () => {
  return (
    <>
      <Hero />
      {/* <TeamSection/> */}
      {/* <YtSlider /> */}
      <ServiceCards />
      {/* <TrustPilotReview /> */}
      <SuperchargeYT />
      <Footer />
    </>
  )
}

export default Home