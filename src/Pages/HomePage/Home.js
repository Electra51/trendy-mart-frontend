import React from "react";
import HeroSection from "../../Components/HomePageComponent/Hero/HeroSection";
import HelmetComponent from "../../Components/Shared/HelmetComponent/HelmetComponent";
import AvailableProduct from "../../Components/HomePageComponent/AvailableProduct/AvailableProduct";

const Home = () => {
  return (
    <div>
      <HelmetComponent title={"Home | TrendyMart"} />
      {/* <HeroSection />
      <AvailableProduct /> */}
    </div>
  );
};

export default Home;
