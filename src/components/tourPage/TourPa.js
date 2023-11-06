import './TourPa.css'
import ImageSlider from "./imageSlider";
import { Gallery } from "react-grid-gallery";
import { useStripe } from '@stripe/react-stripe-js';
import DOMPurify from 'dompurify';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.bubble.css'
// import Lightbox from "react-image-lightbox";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
// import "react-image-lightbox/style.css";
import imgpay from '../../assets/payment1.png';
import {useParams, Link} from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';
import { BACKEND_URL } from '../../utils/react-backend-url';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutButton from '../checkout/CheckoutButton';
import MapComponent from '../mapbox/MapComponent';
import { ShowOnLogin, ShowOnLogout } from "../protect/hiddenItems";
import { getUser } from '../../redux/features/auth/authService';
import { useDispatch } from 'react-redux';
import { SET_USER } from '../../redux/features/auth/authSlice';
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/features/auth/authSlice";

const stripePromise = loadStripe('pk_test_51NRms3IZgty6f2DLU3WKgmfiJ3i01CGh1C3U4ddYRjOsrhldr4ioNO5h9Tp2Akf943gWynS1tAXOfz0RGynzvFo900lOoO32uI');

const TourPage = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const [tour, setTour] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [tourId, setTourId] = useState('');
  const [userId, setUserId] = useState('');
  const [priceTour, setPriceTour] = useState('');



  const getTour = async (id) => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`${BACKEND_URL}/api/v1/tours/${id}`);
      setTour(data);
      setPriceTour(data.price)
      setTourId(data._id);

      // console.log(`this is data ${data}`);
      setIsLoading(false);
    } catch (error) { 
      // toast.error(error.message);
      setIsLoading(false);
    }
  };
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    let isMounted = true;
    if (isLoggedIn) {
      async function getUserData() {
        try {
          const data = await getUser();
          setUserId(data._id);
          if (isMounted) {
            // setEmail(data.email);
            dispatch(SET_USER(data));
          }
        } catch (error) {
          // Handle any errors if needed
        }
      }
      getUserData();
    }
  
    return () => {
      isMounted = false; // Cleanup function to mark the component as unmounted
    };
  }, [dispatch, isLoggedIn]);
  
  
    const handleClickEvent = async (id) => {
    try {
      const {data} = await axios.get(`${BACKEND_URL}/api/v1/bookings/checkout-session/${id}`);


      await stripe.redirectToCheckout({
        
        sessionId: data.session.id,
      
      });

      // if (error) {
      //   console.error('Error:', error);
      // }
    } catch (error) {
      // console.error('Error creating Checkout Session:', error);
    }
  };
  const handleCreateBooking =async () => {
    await axios
      .post(`http://localhost:3000/api/v1/bookings`, { tourId, userId, priceTour })
      .then((res) => {
        if (res.data.Status === 'Success') {
          toast.success('Booking Created');

        } else {
          console.log('Password reset request failed:', res.data.Status);
        }
      })
      .catch((err) => {
        console.log('Network error:', err);
      });
  };
  


  useEffect(() => {
    getTour(id);
  }, [id]);

  const stripe = useStripe();
    const { _id, name, price, image, description, locations, images } = tour;

    const imageData = images;

  
  const slides = [
    
  ];

  // Assuming you have retrieved the image data from the database and stored it in a variable called 'imageData'



// Check if the image data exists
if (imageData && Array.isArray(imageData)) {
  // Iterate over the imageData array
  imageData.forEach(image => {
    // Create a new slide object with the required properties
    const slide = {
      src: image.src,
      width: 702,
      height: 405
    };

    // Push the slide object to the slides array
    slides.push(slide);
  });
}
// const slides1 = {src: image.filePath,
//   width: 702,
//   height: 405}


// Now, the 'slides' array contains dynamically populated image data if available
// console.log(slides);

  const [index, setIndex] = useState(-1);

  const handleClick = (index, item) => setIndex(index);
  const handleClose = () => setIndex(-1);
  return (
    <div>
    <div className='head'>
        <h1 className='tourTitle'>{name}</h1>
        <div className='tourAdress'>
        <i class="fa-solid fa-location-dot"></i>
        </div>
    </div>
      <div className='tourContainer'>
      <div className='tourWrapper'>
        
        <div className='tourImages'>
        <div className='slideimg'>
        {/* <ImageSlider slides={images} /> */}
        
        { 
        slides.length >0 ?<Gallery
        images={slides}
        onClick={handleClick}
        enableImageSelection={false}
        /> : <img src={image?.filePath} alt="img" />}
  
        <Lightbox
        slides={slides}
        open={index >= 0}
        plugins={[ Fullscreen, Slideshow, Zoom]}
        index={index}
        close={() => setIndex(-1)}
      /> 
      
        </div>
        </div>
      </div>
      <div className='tourDetailsPrice'>
            <h1 >
                Book This Tour Now!
            </h1>
              
           <h2>Total Price : <b>{price} $</b></h2>


            <h2>We will send you an Email about the date and the details of the tour.</h2>
            
             <ShowOnLogin><button onClick={() =>{handleCreateBooking();
                           handleClickEvent(_id)
            }}>Checkout</button></ShowOnLogin> 
              <ShowOnLogout><button><Link to='/login'>Login To Book Tour</Link></button></ShowOnLogout>    
            {/* <button>Reserve Now!</button> */}
            <div className='payimg'>
              <img src={imgpay}/>
            </div>
          </div>
    </div>


    <div className='desc'>
      <h2>Description</h2>
      <ReactQuill
            theme="bubble"
            value={description}
            readOnly={true}
          />
    </div>
    {tour.locations && tour.locations.length > 0 && (
  <MapComponent locations={tour.locations} />
)}
 


    
  
  
    
    
  </div>
  )
}

export default TourPage