// import Hero from "../component/hero/hero";
// import Navbar from "../component/navbar/Navbar";
// import img12 from "../assets/aboutimg.jpg";
// import Footer from "../component/footer/footer";
// import AboutUs from "../component/about/aboutUs";
import img12 from "../assets/aboutimg.jpg"

import AboutUs from "../components/about/aboutUs";
import Footer from "../components/footer/footer";
import Hero from "../components/hero/hero";
import Navbar from "../components/navbar/Navbar";

function About() {
  return (
    <>
      <Navbar />
      <Hero cName="Hero-mid" heroImg={img12} title="About Us" btnClass="hide" />
      <AboutUs />
      <Footer/>
    </>
  );
}
export default About;
