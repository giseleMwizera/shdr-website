import React from "react";
import { VISION, MISSION, ABOUTUS, SERVICES } from "./constants";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import LandingSection from "../../components/LandingSection/LandingSection";
import Objective from "../../components/Objective/Objective";
import Service from "../../components/Service/Service";
import MapContainer from "../../components/Map/MapContainer";
import Footer from "../../components/Footer/Footer";
import Contact from "../../components/Contact/Contact";
import "./HomePage.css";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <LandingSection text="Get to know us" number="01">
        <Objective MISSION={MISSION} VISION={VISION} ABOUTUS={ABOUTUS} />
      </LandingSection>
      <LandingSection text="Our Services" number="02">
        <Service SERVICES={SERVICES} />
      </LandingSection>
      <LandingSection text="Our Location" number="03">
        <MapContainer />
      </LandingSection>
      <LandingSection text="Contact us" number="04">
        <Contact />
      </LandingSection>
      <Footer />
    </div>
  );
}

export default HomePage;
