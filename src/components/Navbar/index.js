// components/Navbar/index.js

import React, { useState } from "react";
import logo from "../../assets/transparentlogo.png";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./navbarElements";
import "./navbar.css"; // Import the CSS file

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
      <Nav className="navbar">
        <Bars className="bars" onClick={toggleMenu} />
        <img src={logo} alt="pixelsecrets" className="logo" />
        <NavMenu className={`nav-menu ${menuActive ? "active" : ""}`}>
          <NavLink to="/encode" className="nav-link">Encode</NavLink>
          <NavLink to="/decode" className="nav-link">Decode</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
