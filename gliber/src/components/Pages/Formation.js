import React from "react";
import PH1 from "../../Assets/IMGS/Prestations/PH1.JPG";
import "./Card.css";

function Formation() {
  return (
    <div className="App-ContainerAS">
      <div className="Card-Section">
        <div className="IMGS-Card-Section">
          <img src={PH1} alt="PH1" />
        </div>
        <div className="Text-Card-Section">
          <h1>Formation</h1>
          <p>
            The remote control drone training offered by our services, you will
            will allow you to acquire the necessary skills to be able to pilot
            your aircraft in all safety and mastering it in S1, S2 and S3
            scenarios. With or without your drone, GLIBER proposes you to
            acquire skills in remote piloting and to improve them.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Formation;
