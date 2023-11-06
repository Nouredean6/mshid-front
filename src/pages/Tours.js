// import Hero from "../component/hero/hero";
// import Navbar from "../component/navbar/Navbar";
// import img12 from "../assets/moroccoguide.jpg";
// import Footer from "../component/footer/footer";
// import Tour from "../component/tour/tour";
import img12 from "../assets/moroccoguide.jpg";
import Footer from "../components/footer/footer";
import Hero from "../components/hero/hero";
import Navbar from "../components/navbar/Navbar";
import Tour from "../components/tourr/tour";

function Tours() {
  return (
    <>
      <Navbar />
      <Hero
        cName="Hero-mid"
        heroImg={img12}
        title="Discover Our Tours"
        btnClass="hide"
      />
      <Tour />
      <Footer />
    </>
  );
}
export default Tours;
