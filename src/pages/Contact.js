// import Hero from "../component/hero/hero";
// import Navbar from "../component/navbar/Navbar";
// import img12 from "../assets/contactimg.jpg";
// import Footer from "../component/footer/footer";
// import ContactForm from "../component/contactForm/contactForm";
import img12 from "../assets/contactimg.jpg";
import ContactForm from "../components/contactForm/contactForm";
import Footer from "../components/footer/footer";
import Hero from "../components/hero/hero";
import Navbar from "../components/navbar/Navbar";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="Hero-mid"
        heroImg={img12}
        title="Contact Us"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}
export default Contact;
