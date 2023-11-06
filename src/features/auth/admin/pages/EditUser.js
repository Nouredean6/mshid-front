import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
// import Loader from "../../components/loader/Loader";
import {
  getUser,
  getUsers,
  selectIsLoading,
  selectUser,
  updateUser,
} from "../../../../redux/features/users/usersSlice";
import UserForm from "../../../../components/UserForm/UserForm";

const EditUser = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(selectIsLoading);

  const userEdit = useSelector(selectUser);

  const [user, setUser] = useState(userEdit);
//   const [tourImage, setTourImage] = useState("");
//   const [imagePreview, setImagePreview] = useState(null);
//   const [description, setDescription] = useState("");

  useEffect(() => {
    dispatch(getUser(id));
  }, [dispatch, id]);

  useEffect(() => {
    setUser(userEdit);

    // setImagePreview(
    //   tourEdit && tourEdit.image ? `${tourEdit.image.filePath}` : null
    // );

//     setDescription(
//       tourEdit && tourEdit.description ? tourEdit.description : ""
//     );
  }, [userEdit]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

//   const handleImageChange = (e) => {
//     setTourImage(e.target.files[0]);
//     setImagePreview(URL.createObjectURL(e.target.files[0]));
//   };

  const saveUser = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("firstName", user?.firstName);
    formData.append("lastName", user?.lastName);
    formData.append("email", user?.email);
    formData.append("isAdmin", user?.isAdmin);
    // if (tourImage) {
    //   formData.append("image", tourImage);
    // }



    const action =await dispatch(updateUser({ id, formData }));

    await dispatch(getUsers());
    navigate("/dashboard");
  };

  return (
    <div>
      {/* {isLoading && <Loader />} */}
      <h3 className="--mt">Edit User</h3>
      <UserForm
        user={user}
        // tourImage={tourImage}
        // imagePreview={imagePreview}
        // description={description}
        // setDescription={setDescription}
        handleInputChange={handleInputChange}
        // handleImageChange={handleImageChange}
        saveUser={saveUser}
      />
    </div>
  );
};

export default EditUser;
