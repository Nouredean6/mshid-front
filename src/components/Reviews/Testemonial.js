import React, { useState , useEffect  } from "react";
import "./TestimonialSlider.css";
import korean from "../../assets/korean.jpg";
import canadian from "../../assets/Canadian.jpg"

const testimonials = [
  {
    id: 1,
    author: "Sagong Jee",
    title: "Korea",
    text: `"I can't say enough about the incredible adventure we had in Marrakech with Murshid. From the moment we arrived, our tour guide was so knowledgeable and made sure we experienced the rich culture, vibrant markets, and delicious cuisine of Marrakech. The highlight was the day trip to the Atlas Mountains, the scenery was breathtaking! Thank you, Murshid, for making our trip unforgettable."`,
    image:
      korean,
  },
  {
    id: 2,
    author: "Marcus Segal",
    title: "Canada",
    text: `"The desert safari in Merzouga with Murshid was an absolute dream come true. The endless sand dunes, camel rides, and camping under the stars - it was a once-in-a-lifetime experience. The team at Murshid was fantastic, and they ensured every detail was taken care of. Highly recommend this adventure to anyone visiting Morocco!"`,
    image:
      canadian,
  },
  {
    id: 3,
    author: "Martha Brown",
    title: "Belgium",
    text: `"Fes cultural tour with Murshid was an enlightening experience. We delved into the history and heritage of Fes, explored the intricate maze-like medina, and visited ancient landmarks. Our guide was passionate and shared captivating stories about the city. This tour allowed us to truly immerse ourselves in Moroccan culture. A must-do when in Fes!"`,
    image:
      "https://images.unsplash.com/photo-1575377222312-dd1a63a51638?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=302&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=302",
  },
  {
    id: 4,
    author: "Adèle Hana",
    title: "France",
    text: `"Essaouira is a hidden gem, and our tour with Murshid was the perfect way to discover it. The coastal town had a relaxed charm that we instantly fell in love with. From the vibrant medina to the beautiful beaches, every moment was a delight. We enjoyed fresh seafood and strolls by the ocean. Murshid's attention to detail and local insights made the trip memorable."`,
    image:
      "https://images.unsplash.com/photo-1549836938-d278c5d46d20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=303&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=303",
  },
];

const TestimonialSlider = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Switch to the next testimonial
      setCurrentTestimonial((currentTestimonial + 1) % testimonials.length);
    }, 10000); // Change testimonials every 5 seconds (adjust as needed)

    return () => {
      clearInterval(interval); // Clear the interval on component unmount
    };
  }, [currentTestimonial]);

  const nextTestimonial = () => {
    setCurrentTestimonial((currentTestimonial + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (currentTestimonial - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="testimonial-slider">
      <div className="gallery-info">
        <h1>Testemonials</h1>
        <p>Discover what our clients think of the Tours they had.</p>
      </div>
      <button className="prev" onClick={prevTestimonial}>
        &#8249;
      </button>
      <div className="testimonial">
        <img
          className="testimonial-image"
          src={testimonials[currentTestimonial].image}
          alt=""
        />
        <h5>{testimonials[currentTestimonial].author}</h5>
        <span>{testimonials[currentTestimonial].title}</span>
        <p>{testimonials[currentTestimonial].text}</p>
      </div>
      <button className="next" onClick={nextTestimonial}>
        &#8250;
      </button>
      <div className="dots">
        {testimonials.map((testimonial, index) => (
          <span
            key={testimonial.id}
            className={`dot ${currentTestimonial === index ? "active" : ""}`}
            onClick={() => setCurrentTestimonial(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;