import React, { useState } from "react";
import "./Home.css";

import PH1 from "../../Assets/IMGS/PH1.JPG";
import PH2 from "../../Assets/IMGS/PH2.png";
import PH3 from "../../Assets/IMGS/PH3.png";
import PH4 from "../../Assets/IMGS/PH4.png";

import CPH1 from "../../Assets/IMGS/Cascade/PH1.JPG";
import CPH2 from "../../Assets/IMGS/Cascade/PH2.JPG";
import CPH3 from "../../Assets/IMGS/Cascade/PH3.jpg";
import CPH4 from "../../Assets/IMGS/Cascade/PH4.jpg";

function Home() {
  const [isShown, setIsShown] = useState(false);
  const Imgs = [{ img: PH1 }, { img: PH2 }, { img: PH3 }, { img: PH4 }];

  const [SecondActiveIndex, setSecondActiveIndex] = React.useState([]);

  function Select(index) {
    if (SecondActiveIndex.includes(index)) {
      setSecondActiveIndex((curr) => curr.filter((elem) => elem !== index));
    } else {
      setSecondActiveIndex((curr) => [...curr, index]);
    }
  }

  return (
    <div className="Home">
      <div className="First-Section">
        <div className="First-Section-IMG">
          <img src={PH1} alt="IMG-1" className="IMG-1" />
        </div>
        <div className="First-Section-Text">
          <div style={{ height: "30px" }} />
          <a>Welcome !</a>
          <div style={{ height: "30px" }} />

          <p>
            Gliber est à votre écoute pour préparer votre projet audiovisuel à
            base d’images aériennes. Nous vous proposons des prestations en
            photographie ou cinématographie aérienne au moyen d'un drone
            professionnel (DJI inspire 2) dans le respect de la réglementation.
            Événementiel : mariage, baptême, festival, exposition voitures,… Vu
            sous un autre angle, les souvenirs de votre journée deviendront
            magiques. Devis gratuit sur demande.
          </p>

          <div style={{ height: "30px" }} />
          <button>Learn more</button>
        </div>
      </div>

      <div className="Seconde-Section">
        {Imgs.map((elem, index) => {
          return (
            <div className="Seconde-Section-IMGS" key={index}>
              <div
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
                style={{
                  opacity: isShown ? 0.5 : 0,
                  position: "absolute",
                  backgroundColor: "black",
                  width: 635,
                  height: 370,
                }}
              >
                <h1 style={{ color: "white" }}>Learn more</h1>
              </div>
              <img
                alt="IMG 1"
                onMouseEnter={() => Select(index) && setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
                className="IMG-Seconde-Section"
                src={elem.img}
              />
            </div>
          );
        })}
      </div>

      <div style={{ height: "50px" }} />

      <div className="Third-Section">
        <div className="Cascade-Section1">
          <img src={CPH1} alt="IMG 1" className="CIMG-1" />
          <img src={CPH2} alt="IMG 1" className="CIMG-2" />
        </div>
        <div className="Cascade-Section2">
          <img src={CPH3} alt="IMG 1" className="CIMG-3" />
          <img src={CPH4} alt="IMG 1" className="CIMG-4" />
        </div>
      </div>
      <div style={{ height: "650px" }} />
    </div>
  );
}
export default Home;
