import React from "react";
import Logo from "../Assets/IMGS/Logo.png";

import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header className="App-header">
      <img src={Logo} alt="Logo/app" className="Logo-app" />
      <div className="Buttons">
        <Link to={"/"}>
          <button>Home</button>
        </Link>
        <Link to={"/MyServices"}>
          <button>My services</button>
        </Link>
        <Link to={"/MyProjects"}>
          <button>My projects</button>
        </Link>
        <button>My achievements</button>
        <button>My story</button>
        <button>Contact me</button>
      </div>
    </header>
  );
}

export default NavBar;
