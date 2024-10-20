import React from "react";
import HeroSection from "../../Components/HomePageComponent/Hero/HeroSection";
import HelmetComponent from "../../Components/Shared/HelmetComponent/HelmetComponent";
import AvailableProduct from "../../Components/HomePageComponent/AvailableProduct/AvailableProduct";
import Categories from "../../Components/HomePageComponent/Categories/Categories";
import OfferSection from "../../Components/HomePageComponent/OfferSection/OfferSection";

const Home = () => {
  return (
    <div>
      <HelmetComponent title={"Home | TrendyMart"} />
      <HeroSection />
      <Categories />
      <AvailableProduct />
      <OfferSection />
    </div>
  );
};

export default Home;
