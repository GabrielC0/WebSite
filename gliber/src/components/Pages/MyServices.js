import React from "react";
import PH1 from "../../Assets/IMGS/Prestations/PH1.JPG";
import { Link, Outlet } from "react-router-dom";
import "./MyServices.css";

function MyServices() {
  return (
    <div className="App-ContainerMp">
      <div className="First-SectionMp">
        <div className="First-Section-IMGMp">
          <img src={PH1} />
        </div>
        <div className="Prestations-SectionMp">
          <img src={PH1} />
          <Link to={"/MyServices/AerialShots"}>
            <a onClick={() => window.scrollTo(0, 800)}>Aerial Shots</a>
          </Link>
          <img src={PH1} />
          <Link to={"/MyServices/Inspections"}>
            <a onClick={() => window.scrollTo(0, 800)}>Inspections</a>
          </Link>
          <img src={PH1} />
          <Link to={"/MyServices/DroneBuyingGuide"}>
            <a onClick={() => window.scrollTo(0, 800)}>Buying Guide</a>
          </Link>
          <img src={PH1} />
          <Link to={"/MyServices/Formation"}>
            <a onClick={() => window.scrollTo(0, 800)}>Formation</a>
          </Link>
        </div>
      </div>
      <Outlet />
      <div style={{ height: 500 }} />
    </div>
  );
}

export default MyServices;
