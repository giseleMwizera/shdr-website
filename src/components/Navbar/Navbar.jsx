import React from "react";
import "./Navbar.css";
import BlueButton from "../BlueButton/BlueButton";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="--nav-bar">
      <div className="--nav-logo">
        <img
          src="../../assets/logo.PNG"
          alt="Logo image"
          width="180px"
          height="100px"
        />
      </div>
      <div className="--nav-center">
        <ul className="--nav-links">
          <Link to="/">Home</Link>
          <Link>About us</Link>
          <Link>Our Services</Link>
          <Link>Our Location</Link>
          <Link>Contact us</Link>
          <Link to="/plans">Our plans</Link>
        </ul>
      </div>
      <div className="--blue-button">
        <BlueButton text="Get started" to="/auth/login" />
      </div>
    </div>
  );
}
export default Navbar;
