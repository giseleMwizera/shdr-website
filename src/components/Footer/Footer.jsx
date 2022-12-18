import React from "react";
import "./Footer.css";
import { BiMailSend } from "react-icons/bi";
import { BsPhoneFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

function Footer() {
  return (
    <div className="--footer">
      <div className="--footer-top">
        <div className="--media-links">
          <div className="--link-container"></div>
          <div className="--link-container"></div>
          <div className="--link-container"></div>
        </div>
        <div className="logo">
          <img src="./public/assets/logo.PNG" alt="" />
        </div>
      </div>
      <div className="--footer-center">
        <div className="--info-item">
          <div className="--info-item-icon">
            <BiMailSend className="icon-component" />
          </div>
          <div className="--item-title">Mail</div>
          <div className="--item-detail">sustainablehomesdesign@gmail.com</div>
        </div>
        <div className="--info-item">
          <div className="--info-item-icon">
            <BsPhoneFill className="icon-component" />
          </div>
          <div className="--item-title">Phone</div>
          <div className="--item-detail">sustainablehomesdesign@gmail.com</div>
        </div>
        <div className="--info-item">
          <div className="--info-item-icon">
            <GoLocation className="icon-component" />
          </div>
          <div className="--item-title">Find us</div>
          <div className="--item-detail">Rwanda, Kigali, Kicukiro</div>
        </div>
      </div>
      <div className="--footer-bottom">
        <p>&copy; All Right reserved, 2022</p>
      </div>
    </div>
  );
}

export default Footer;
