import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import Card from "../../card/Card";

import "./UserForm.css"
const UserForm = ({
  user,
//   description,
//   setDescription,
  handleInputChange,
//   handleImageChange,
  saveUser,
}) => {
  return (
    <div className="add-user">
      {/* <Card cardClass={"card"}> */}
        <form onSubmit={saveUser}>
          {/* <Card cardClass={"group"}> */}
            {/* <label>Tour Image</label>
            <code className="--color-dark">
              Supported Formats: jpg, jpeg, png
            </code>
            <input
              type="file"
              name="image"
              onChange={(e) => handleImageChange(e)}
            />

            {imagePreview != null ? (
              <div className="image-preview">
                <img src={imagePreview} alt="tour" />
              </div>
            ) : (
              <p>No image set for this tour.</p>
            )} */}
          <label>User's First Name:</label>
          <input
            type="text"
            placeholder="User's firstName"
            name="firstName"
            value={user?.firstName}
            onChange={handleInputChange}
          />
          <label>User's Last Name:</label>
          <input
            type="text"
            placeholder="User's lastName"
            name="lastName"
            value={user?.lastName}
            onChange={handleInputChange}
          />


          <label>User's Email:</label>
          <input
            type="text"
            placeholder="User's Email"
            name="email"
            value={user?.email}
            onChange={handleInputChange}
          />

          {/* <label>Tour Description:</label> */}
          {/* <ReactQuill
            theme="snow"
            // value={description}
            // onChange={setDescription}
            // modules={TourForm.modules}
            // formats={TourForm.formats}
          /> */}

          <div className="--my">
            <button className="--btn --btn-primary" type="submit">
              Save User
            </button>
          </div>
        </form>
    </div>
  );
};


export default UserForm;