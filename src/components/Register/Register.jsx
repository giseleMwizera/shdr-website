import React from "react";
import { Link } from "react-router-dom";
import BlueButton from "../BlueButton/BlueButton";
import "./Register.css";

function Register() {
  return (
    <div className="--login">
      <form action="">
        <div className="--form-element">
          <input type="text" placeholder="Full name" />
        </div>
        <div className="--form-element">
          <input type="text" placeholder="Email address" />
        </div>
        <div className="--form-element">
          <input
            type="password"
            name="Password"
            id="Password"
            placeholder="Password"
          />
        </div>
        <div className="--form-element">
          <input
            type="password"
            name="cpass"
            id="cpass"
            placeholder="Confirm password"
          />
        </div>
        <div className="--form-element terms">
          <input type="checkbox" name="" id="" />
          <label htmlFor="terms">
            By clicking, you agree to the Terms & conditions
          </label>
        </div>
        <div className="--form-element">
          <BlueButton text="Register" />
          <div className="--inquiry-text">
            Already have an account? <Link to="auth/login">Login</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
