import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import Card from "../../card/Card";

import "./TourForm.css"
const TourForm = ({
  tour,
  tourImage,
  imagePreview,
  description,
  setDescription,
  handleInputChange,
  handleImageChange,
  saveTour,
}) => {
  return (
    <div className="add-tour">
      {/* <Card cardClass={"card"}> */}
        <form onSubmit={saveTour}>
          {/* <Card cardClass={"group"}> */}
            
          <div className="tora">
         <div className="tourname">
         <label>Tour Name:</label>
          <input
            type="text"
            placeholder="Tour name"
            name="name"
            value={tour?.name}
            onChange={handleInputChange}
          />
         </div>


         <div className="tourprice"> <label>Tour Price:</label>
          <input
            type="text"
            placeholder="Tour Price"
            name="price"
            value={tour?.price}
            onChange={handleInputChange}
          /></div>
          </div>
          <label>Tour Image</label>
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
            )}
          <label>Tour Description:</label>
          <ReactQuill
            theme="snow"
            value={description}
            onChange={setDescription}
            modules={TourForm.modules}
            formats={TourForm.formats}
          />

          <div className="--my">
            <button className="bt --btn --btn-primary" type="submit">
              Save Tour
            </button>
          </div>
        </form>
    </div>
  );
};

TourForm.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["clean"],
  ],
};
TourForm.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "color",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "video",
  "image",
  "code-block",
  "align",
];

export default TourForm;