import Tour from "./tour";
import "./tourStyle.css";

function TourData(props) {
  return (
    <div className="t-card">
      <div className="t-image">
        <img src={props.image} alt="img" />
      </div>
       <h4><i class="fa-solid fa-location-dot"></i>{props.heading}</h4>
      <p >{props.text}</p>
      <div className="btnlearn">
        <a href={props.url}>{props.button}</a>
        <i class="fa-solid fa-angle-right"></i>
        
      </div>
    </div>
  );
}

export default TourData;
