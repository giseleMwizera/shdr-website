import React from "react";
import BlueButton from "../BlueButton/BlueButton";
import "./Contact.css";
function Contact() {
  return (
    <div>
      <div className="--contact-content">
        <div className="--contact-left">
          <form action="">
            <div className="--form-element">
              <input type="text" placeholder="Names" />
            </div>
            <div className="--form-element">
              <input type="text" placeholder="Email address" />
            </div>
            <div className="--form-element">
              <textarea name="Message" id="" cols="45" rows="10"></textarea>
            </div>
            <div className="--form-element">
              <BlueButton text="Submit" />
            </div>
          </form>
        </div>
        <div className="--contact-right">
          <img
            src="./public/assets/contactus.png"
            alt="Contact us illustration
          "
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
