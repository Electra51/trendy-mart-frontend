import React from "react";
import "./hero.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../../../assets/1.png";
import img2 from "../../../assets/2.png";
import img3 from "../../../assets/3.png";
import img4 from "../../../assets/5.png";
import img5 from "../../../assets/4.png";
import Button from "../../Common/Button/Button";

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="slider-container">
      <div className="hero-section">
        <div className="hero-content">
          <p>Our Exclusive</p>
          <h1 className="hero-title">ReadStarts</h1>

          <p className="hero-para">
            {" "}
            We have all your needs! Are you looking for the best performance
          </p>
          <Button title={"Buy Now"} color="#F08F33" />
        </div>
        <img src={img1} alt="" />
      </div>
      <div className="hero-section">
        <img src={img2} alt="" />
      </div>
      <div className="hero-section">
        <img src={img3} alt="" />
      </div>
      <div className="hero-section">
        <img src={img4} alt="" />
      </div>
      <div className="hero-section">
        <img src={img5} alt="" />
      </div>
    </Slider>
  );
};

export default HeroSection;
