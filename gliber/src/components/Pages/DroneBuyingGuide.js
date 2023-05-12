import React from "react";
import PH1 from "../../Assets/IMGS/Prestations/PH1.JPG";
import "./Card.css";

function DroneBuyingGuide() {
  return (
    <div className="App-ContainerAS">
      <div className="Card-Section">
        <div className="IMGS-Card-Section">
          <img src={PH1} alt="PH1" />
          <img src={PH1} alt="PH1" />
        </div>
        <div className="Text-Card-Section">
          <h1>Drone Buying Guide</h1>
          <p>
            Buying a drone requires a lot of thought. At GLIBER, we offer our
            services we offer you our services to find the drone you need,
            whether need, whether for professionals or individuals. Start by
            contacting us and giving us all the information on your purchase
            criteria and we will come back to you as soon as possible with one
            or with one or more proposals to buy a drone at the right price.
            price. In addition, we do all the administrative steps for you. for
            you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DroneBuyingGuide;
