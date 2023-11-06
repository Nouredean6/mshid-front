import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
// import Loader from "../../components/loader/Loader";
import TourForm from "../../../../components/tour/TourForm/TourForm";
import {
  getTour,
  getTours,
  selectIsLoading,
  selectTour,
  updateTour,
} from "../../../../redux/features/tour/tourSlice";

const EditTour = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(selectIsLoading);

  const tourEdit = useSelector(selectTour);

  const [tour, setTour] = useState(tourEdit);
  const [tourImage, setTourImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [description, setDescription] = useState("");
  const [summary, setSummary] = useState("");


  useEffect(() => {
    dispatch(getTour(id));
  }, [dispatch, id]);

  useEffect(() => {
    setTour(tourEdit);

    setImagePreview(
      tourEdit && tourEdit.image ? `${tourEdit.image.filePath}` : null
    );

    setDescription(
      tourEdit && tourEdit.description ? tourEdit.description : ""
    );

    setSummary(
      tourEdit && tourEdit.summary ? tourEdit.summary : ""
    );
  }, [tourEdit]);




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
    formData.append("name", tour?.name);
    formData.append("price", tour?.price);
    formData.append("description", description);
    formData.append("summary", summary);
    if (tourImage) {
      formData.append("image", tourImage);
    }



    await dispatch(updateTour({ id, formData }));
    await dispatch(getTours());
    navigate("/dashboard");
  };

  return (
    <div>
      {/* {isLoading && <Loader />} */}
      <h3 className="--mt">Edit Tour</h3>
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

export default EditTour;
