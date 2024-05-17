import React from "react";
import img1 from "../images/example-go-bremen.PNG";

const GoBremen = () => {
  return (
    <>
      <div>
        <p className="mirror2 font2">Go Bremen</p>
      </div>
      <br />
      <img src={img1} alt="Go in Bremen" width="500px" />
    </>
  );
};

export default GoBremen;
