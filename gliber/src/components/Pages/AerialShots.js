import React from "react";
import PH1 from "../../Assets/IMGS/Prestations/PH1.JPG";
import "./Card.css";

function AerialShots() {
  return (
    <div className="App-ContainerAS">
      <div className="Card-Section">
        <div className="IMGS-Card-Section">
          <img src={PH1} alt="PH1" />
          <img src={PH1} alt="PH1" />
        </div>
        <div className="Text-Card-Section">
          <h1>Aerial Shots</h1>
          <p>
            At GLIBER we offer you to capture all your important moments
            important professional or personal moments: (Follow-up of building
            sites, wedding photos wedding photos, sky view of all your real
            estate ...) Which is technical or artistic aerial photography by
            drone has several advantages: 1) The economy: More than 10 times
            cheaper than expensive than traditional solutions (helicopter,
            scaffolding, crane, gondola ...). 2) Speed: Ultra-fast
            implementation, less than 10 minutes to deploy the system. 3)
            Accuracy and Handiness : Allows access everywhere and in a very
            precise way. 4) Spectacular : Out of the ordinary images, new
            angles. 5) Respect of the environment : Silent and without CO2
            emission.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AerialShots;
