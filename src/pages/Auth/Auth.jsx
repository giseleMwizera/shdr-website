import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import "./Auth.css";

function Auth() {
  return (
    <div className="--auth-page">
      <Navbar />
      <div className="--auth-content">
        <div className="--auth-content-left">
          <img src="/public/assets/AuthPhoto.png" alt="Auth Photo" />
        </div>
        <div className="--auth-content-right">
          <div className="--form-heading">
            <p>Get your building plan right now!</p>
          </div>
          <div className="--auth-form">
            <Outlet />
          </div>
          <div className="--auth-content-alternatives"></div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
