import React from "react";
import "./BlueButton.css";
import { Link } from "react-router-dom";

function BlueButton(props) {
  return (
    <button to={`${props.to}`} className="--main-blue-button">
      {props.text}
    </button>
  );
}

export default BlueButton;
