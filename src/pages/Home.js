// import Hero from "../component/hero/hero";
// import Navbar from "../component/navbar/Navbar";
// import img12 from "../assets/home.jpg";
// import Destination from "../component/destination/destination";
// import Tour from "../component/tour/tour";
// import Slide from "../component/galleryslide/galleryslide";
// import MailList from "../component/mailList/mailList";

import Destination from "../components/destination/destination";
import Footer from "../components/footer/footer";
import Slide from "../components/galleryslide/galleryslide";
import Hero from "../components/hero/hero";
import MailList from "../components/mailList/mailList";
import Navbar from "../components/navbar/Navbar";
import img12 from "../assets/home.jpg";
import Tour from "../components/tourr/tour";
import TestimonialSlider from "../components/Reviews/Testemonial";

// import Footer from "../component/footer/footer";
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="Hero"
        heroImg={img12}
        title="Tour Morocco in Comfort"
        text="Enjoy Our Exclusive Offers"
        url="/Tours"
        btnText="Check Our Tours"
        btnClass="show"
      />
      <Destination />
      <Tour />
      <TestimonialSlider/>
      <Slide />
      <MailList />
      <Footer />
    </>
  );
}
export default Home;
