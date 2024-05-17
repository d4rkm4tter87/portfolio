import React from "react";
import img1 from "../images/example-tsumego-hero.PNG";

const TsumegoHero = () => {
  return (
    <>
      <div>
        <p className="mirror2 font2">Tsumego Hero</p>
      </div>
      <br />
      <img src={img1} alt="Tsumego Hero" width="500px" />
    </>
  );
};

export default TsumegoHero;
