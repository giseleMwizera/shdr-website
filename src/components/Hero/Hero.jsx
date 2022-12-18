import React from "react";
import BlueButton from "../BlueButton/BlueButton";
import "./Hero.css";
function Hero() {
  return (
    <div className="--hero">
      <div className="--hero-left">
        <h3>
          Make the right <br></br>choice now
          <span className="--hero-red-dot">.</span>
        </h3>
        <p>Stunning interior design services, now within reach</p>
        <BlueButton text="Explore our plans" />
      </div>
      <div className="--hero-right"></div>
    </div>
  );
}

export default Hero;
