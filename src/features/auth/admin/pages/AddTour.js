import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import Loader from "../../components/loader/Loader";
import { createTour } from "../../../../redux/features/tour/tourSlice";
import TourForm from "../../../../components/tour/TourForm/TourForm";

const initialState = {
  name: "",
  price: "",
  // summary:""
  // description: "",
  // price: "",
};

const AddTour = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [tour, setTour] = useState(initialState);
  const [tourImage, setTourImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [description, setDescription] = useState("");
  const [summary, setSummary] = useState("");



//   const isLoading = useSelector(selectIsLoading);

  const { name, price } = tour;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTour({ ...tour, [name]: value });
  };

  const handleImageChange = (e) => {
    setTourImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };



  const saveTour = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("summary", summary);
    formData.append("image", tourImage);



    await dispatch(createTour(formData));

    // navigate("/dashboard");
  };

  return (
    <div>
      {/* {isLoading && <Loader />} */}
      <h3 className="--mt">Add New Tour</h3>
      <TourForm
        tour={tour}
        tourImage={tourImage}
        imagePreview={imagePreview}
        description={description}
        setDescription={setDescription}
        summary={summary}
        setSummary={setSummary}
        handleInputChange={handleInputChange}
        handleImageChange={handleImageChange}
        saveTour={saveTour}
      />
    </div>
  );
};

export default AddTour;