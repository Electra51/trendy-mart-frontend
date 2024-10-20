import React from "react";
import "./hero.css";
import heroImg from "../../../assets/banner1.jpg";
const HeroSection = () => {
  return (
    <div className="hero-section">
      <img src={heroImg} alt="" />
    </div>
  );
};

export default HeroSection;
