import React from "react";
import HeroSection from "../../Components/HomePageComponent/Hero/HeroSection";
import HelmetComponent from "../../Components/Shared/HelmetComponent/HelmetComponent";

const Home = () => {
  return (
    <div>
      <HelmetComponent title={"Home | TrendyMart"} />
      <HeroSection />
    </div>
  );
};

export default Home;
