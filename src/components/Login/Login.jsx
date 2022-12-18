import React from "react";
import { Link, useNavigate } from "react-router-dom";
import BlueButton from "../BlueButton/BlueButton";
import "./Login.css";

function Register() {
  const navigate = useNavigate();
  return (
    <div className="--login">
      <form action="">
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

        <div className="--form-element terms">
          <div className="remember">
            <input type="checkbox" name="terms" id="terms" />
            <label htmlFor="terms">Keep me signed in</label>
          </div>
          <div>
            <Link className="--forgot-password">Forgot password?</Link>
          </div>
        </div>
        <div className="--form-element">
          <BlueButton text="Login" />
          <div className="--inquiry-text">
            Don't have an account?{" "}
            <Link to={navigate("/auth/register")}>Register</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
