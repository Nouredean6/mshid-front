import TourData from "./tourData";
import "./tourStyle.css";
import Tour1 from "../../assets/marrakech.jpg";
import Tour3 from "../../assets/taghazout2.jpg";
import Tour4 from "../../assets/chefchaouen1.jpg";
import Tour6 from "../../assets/fes.jpeg";
import { useEffect, useState } from "react";
// import { getTours, selectTours } from "../../redux/features/tour/tourSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BACKEND_URL } from "../../utils/react-backend-url";
import DOMPurify from 'dompurify';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Tour() {
   const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const getTours = async () => {
    // setIsLoading(true);
    try {
      const { data } = await axios.get(`${BACKEND_URL}/api/v1/tours`);
      setTours(data);
      setIsLoading(false);
    } catch (error) {
      // toast.error(error.message);
      // setIsLoading(false);
    }
  };

  useEffect(() => {
    getTours();
  }, []);
  return (
    <SkeletonTheme baseColor="#c0c0c0" highlightColor="#d0d0d0">

    <div className="tour">
      <h1> Recent tours </h1>
      <p>You can discover any destination using google maps</p>
      <div className="tourcard">
      {/* {isLoading &&(
        <p>
        <Skeleton count={10}/>
        </p>
      )} */}
      {isLoading ? (
  <SkeletonTheme baseColor="#c0c0c0" highlightColor="#d0d0d0">
    <div className="t-card">
      <div className="t-image">
        <Skeleton width={'100%'} height={'100%'}/>
      </div>
      <h4><Skeleton/></h4>
      <p ><Skeleton/></p>
      <div className="btnlearn">
    <a><Skeleton/></a>
      </div>
</div>
<div className="t-card">
    <div className="t-image">
    <Skeleton width={'100%'} height={'100%'}/>
    </div>
   <h4><Skeleton/></h4>
    <p ><Skeleton/></p>
  <div className="btnlearn">
    <a><Skeleton/></a>
  </div>
</div>
<div className="t-card">
    <div className="t-image">
    <Skeleton width={'100%'} height={'100%'}/>
    </div>
   <h4><Skeleton/></h4>
    <p ><Skeleton/></p>
  <div className="btnlearn">
    <a><Skeleton/></a>
  </div>
</div>
<div className="t-card">
    <div className="t-image">
    <Skeleton width={'100%'} height={'100%'}/>
    </div>
   <h4><Skeleton/></h4>
    <p ><Skeleton/></p>
  <div className="btnlearn">
    <a><Skeleton/></a>
  </div>
</div> 
<div className="t-card">
      <div className="t-image">
        <Skeleton width={'100%'} height={'100%'}/>
      </div>
      <h4><Skeleton/></h4>
      <p ><Skeleton/></p>
      <div className="btnlearn">
    <a><Skeleton/></a>
      </div>
</div>
<div className="t-card">
      <div className="t-image">
        <Skeleton width={'100%'} height={'100%'}/>
      </div>
      <h4><Skeleton/></h4>
      <p ><Skeleton/></p>
      <div className="btnlearn">
    <a><Skeleton/></a>
      </div>
</div>
<div className="t-card">
      <div className="t-image">
        <Skeleton width={'100%'} height={'100%'}/>
      </div>
      <h4><Skeleton/></h4>
      <p ><Skeleton/></p>
      <div className="btnlearn">
    <a><Skeleton/></a>
      </div>
</div>
<div className="t-card">
      <div className="t-image">
        <Skeleton width={'100%'} height={'100%'}/>
      </div>
      <h4><Skeleton/></h4>
      <p ><Skeleton/></p>
      <div className="btnlearn">
    <a><Skeleton/></a>
      </div>
</div>
<div className="t-card">
      <div className="t-image">
        <Skeleton width={'100%'} height={'100%'}/>
      </div>
      <h4><Skeleton/></h4>
      <p ><Skeleton/></p>
      <div className="btnlearn">
    <a><Skeleton/></a>
      </div>
</div>
    </SkeletonTheme>

  
) : (
  tours.map((tour, index) => {
    const { _id, name, price, image, description, summary } = tour;
    return (
      <TourData
        key={_id}
        image={image.filePath}
        heading={name}
        text={DOMPurify.sanitize(summary, { FORBID_TAGS: ['p', 'span'] })}
        url={`/tour-details/${_id}`}
        button="Learn More"
      />
    );
  })
)}
      </div>
    </div>
    </SkeletonTheme>
  );
}

export default Tour;
