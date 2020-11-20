import React from "react";
import "./featuredblogcomponent.css";
const Featuredblogcomponent = () => {
  return (
    <div className="featuredblogcontainer">
      <div className="featuredcontentbox">
        <h1 style={{ margin: "2rem" }}>"This is Featured Blog "</h1>
        <button className="featuredreadmorebutton">Read More>></button>
      </div>
      <div className="featuredimagebox">
        <img
          style={{ height: "100%", width: "100%" }}
          src={
            "https://economictimes.indiatimes.com/thumb/msid-70362418,width-1200,height-900,resizemode-4,imgsize-971552/apples_getty-images.jpg?from=mdr"
          }
          alt="featureimage"
        ></img>
      </div>
    </div>
  );
};
export default Featuredblogcomponent;
