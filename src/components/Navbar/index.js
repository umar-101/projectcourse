// components/Navbar/index.js

import React from "react";
import logo from "../../assets/PixelLOGO.png";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./navbarElements";

const Navbar = () => {
  const imageStyle = {
    width: "160px", // Set the width
    height: "40px", // Maintain aspect ratio
  };
  return (
    <>
      <Nav>
        <Bars />
        {/* <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn> */}
        <img src={logo} alt="pixelsecrets" style={imageStyle} />
        <NavMenu>
          <NavLink to="/encode">Encode</NavLink>
          <NavLink to="/decode">Decode</NavLink>
          <NavLink to="/about">About</NavLink>

          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
