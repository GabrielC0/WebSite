import React from "react";
import { button } from "react";

import Logo from "../Assets/IMGS/Logo.png";

import "./NavBar.css";

function NavBar() {
  return (
    <header className="App-header">
      <img src={Logo} alt="Logo/app" className="Logo-app" />
      <div className="Buttons">
        <button>Home</button>
        <button>My services</button>
        <button>My projects</button>
        <button>My achievements</button>
        <button>My story</button>
        <button>Contact me</button>
      </div>
    </header>
  );
}

export default NavBar;
