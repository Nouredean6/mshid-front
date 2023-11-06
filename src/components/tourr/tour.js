import TourData from "./tourData";
import "./tourStyle.css";
import Tour1 from "../../assets/marrakech.jpg";
// import Tour2 from "../../assets/6.jpg";
import Tour3 from "../../assets/taghazout2.jpg";
import Tour4 from "../../assets/chefchaouen1.jpg";
// import Tour5 from "../../assets/10.jpg";
import Tour6 from "../../assets/fes.jpeg";
import { useEffect, useState } from "react";
// import { getTours, selectTours } from "../../redux/features/tour/tourSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BACKEND_URL } from "../../utils/react-backend-url";
import DOMPurify from 'dompurify';


function Tour() {
   const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  const getTours = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`${BACKEND_URL}/api/v1/tours`);
      setTours(data);

      setIsLoading(false);
    } catch (error) {
      // toast.error(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTours();
  }, []);



  
  return (
    <div className="tour">
      <h1> Recent tours </h1>
      <p>You can discover any destination using google maps</p>
      <div className="tourcard">

      {tours.map((tour, index) => {
            const { _id, name, price,image, description,summary } = tour;
            return (
              <TourData
                key={_id}
                image={image.filePath}
                heading={name}
                text={DOMPurify.sanitize(summary, {FORBID_TAGS: ['p', 'span']})}
                url={`/tour-details/${_id}`}
                button="learn more"
              />
            );
          })}
      </div>
    </div>
  );
}

export default Tour;
