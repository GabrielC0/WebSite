import React from "react";
import PH1 from "../../Assets/IMGS/Réalisations/PH1.JPG";
import "./Card.css";

function inspections() {
  return (
    <div className="App-ContainerAS">
      <div className="Card-Section">
        <div className="IMGS-Card-Section">
          <img src={PH1} alt="PH1" />
          <img src={PH1} alt="PH1" />
        </div>
        <div className="Text-Card-Section">
          <h1>Inspections</h1>
          <p>
            Unmanned aircraft are increasingly being used to perform work that
            was previously work that was once considered too risky or even
            impossible. impossible. Drone inspection is ideal for areas that are
            difficult to access, including the detection of detection of
            pathology (infiltration, breakage, subsidence...) of elements of
            buildings (roof, chimney, facade...) and other other equipment.
            Whether it is an individual house, a building or industrial site,
            this technique aims to identify and analyze the defects of a
            structure. We also inspect various technical installations, such as
            photovoltaic panels.
          </p>
        </div>
      </div>
    </div>
  );
}

export default inspections;
