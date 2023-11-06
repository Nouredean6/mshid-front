import Montaing from "../../assets/Chefchaouen.jpg";
import Montaing2 from "../../assets/chefchaouen1.jpg";
import Montaing3 from "../../assets/taghazout1.jpg";
import Montaing4 from "../../assets/taghazout2.jpg";
import DestinatonData from "./destinationData";

import "./destinationStyle.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you the oportunite to discover alot</p>

      <DestinatonData
        className="first-des"
        heading="Chefchaouen
      "
        text="Nestled gracefully beneath the majestic peaks of the Rif Mountains, Chefchaouen exudes the charm of a quaint mountain town located in the northeastern reaches of Morocco. Its picturesque setting is further accentuated by a population of 40,000 inhabitants, residing at an elevation of 600 meters, nestled against the formidable Kelaa and Meggou mountains. Together, these natural wonders coalesce to create the awe-inspiring splendor of Jebel Chaouen.


      "
        img1={Montaing}
        img2={Montaing2}
      />
      <DestinatonData
        className="first-des-reverse"
        heading="Taghazout Agadir
      "
        text="Discover the coastal gem of Taghazout, where the sun generously graces our shores throughout most of the year. With a yearly precipitation average of up to 400 millimeters, and even more in the surrounding mountains, our region experiences intermittent, yet at times, dramatic rain showers.



      "
        img1={Montaing3}
        img2={Montaing4}
      />
      
    </div>
  );
};

export default Destination;
