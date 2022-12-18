import React from "react";
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import "./PlansPage.css";
import Plan from "../../../components/Plan/Plan";
function PlansPage() {
  const PLANS = [
    "All",
    "Residential",
    "Educational",
    "Institutional",
    "Assembly",
    "Business",
    "Mercantile",
    "Industrial",
    "Storage",
  ];
  return (
    <div className="--plans-page">
      <Navbar />
      <div className="--plans-content">
        <div className="--plans-links">
          {PLANS.map((plan, index) => {
            return <Link key={index}>{plan}</Link>;
          })}
        </div>
        <Plan />
      </div>

      <Footer />
    </div>
  );
}

export default PlansPage;
