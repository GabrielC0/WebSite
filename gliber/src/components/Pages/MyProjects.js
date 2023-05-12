import React from "react";
import "./MyProjects.css";

import Img1 from "../../Assets/IMGS/Réalisations/PH1.JPG";

function MyProjects() {
  return (
    <div className="content">
      <h1>Mes réalisations</h1>
      <img src={Img1} />
      <div style={{ height: "50px" }} />
      <div className="AerialShots">
        <h1>AerialShots</h1>
        <img src={Img1} />
        <img src={Img1} />
        <img src={Img1} />
        <img src={Img1} />
        <img src={Img1} />
        <img src={Img1} />
      </div>
      <div style={{ height: "50px" }} />
      <div className="inspections">
        <h1>inspections</h1>
        <img src={Img1} />
        <img src={Img1} />
        <img src={Img1} />
        <img src={Img1} />
      </div>
    </div>
  );
}

export default MyProjects;
