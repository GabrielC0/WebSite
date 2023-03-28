import { React, button, useState } from "react";

import PH1 from "../../Assets/IMGS/PH1.JPG";
import PH2 from "../../Assets/IMGS/PH2.png";
import PH3 from "../../Assets/IMGS/PH3.png";
import PH4 from "../../Assets/IMGS/PH4.png";

import "./Home.css";

function Home() {
  const [isShown, setIsShown] = useState(false);

  const Imgs = [{ img: PH1 }, { img: PH2 }, { img: PH3 }, { img: PH4 }];

  return (
    <div className="Home">
      <div className="First-Section">
        <div className="First-Section-IMG">
          <img src={PH1} alt="IMG 1" className="IMG-1" />
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
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
                className="IMG-Seconde-Section"
                src={elem.img}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Home;
