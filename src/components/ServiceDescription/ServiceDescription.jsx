import React from "react";
import BlueButton from "../BlueButton/BlueButton";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./ServiceDescription.css";
import { Link } from "react-router-dom";

function ServiceDescription() {
  return (
    <div>
      <Navbar />
      <div className="--service-navigation --description">
        <Link>All</Link>
        <Link>Construction works</Link>
        <Link>Surveying works</Link>
        <Link>Plumbing and electrical works</Link>
      </div>
      <div className="--service-description-content">
        <div className="--service-card">
          <div className="--card-left"></div>
          <div className="--card-right">
            <div className="--price">$300.00</div>
            <div className="--title">Topography</div>
            <div className="--description">
              <p>
                Topography is the study of the shape, landforms and other
                physical features of the site under consideration. This study is
                a part of the geotechnical investigation carried out prior to
                undertaking a trenchless pipeline installation project.
              </p>
            </div>
            <BlueButton text="Bid now" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ServiceDescription;
