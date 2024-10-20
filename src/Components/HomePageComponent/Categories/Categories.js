import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./categories.css";
import { useGetCategoriesQuery } from "../../../Redux/categoryApi";

const Categories = () => {
  const {
    data: categories,
    isLoading: loadingCategories,
    error: errorCategories,
  } = useGetCategoriesQuery();

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToScroll: 4,
    initialSlide: 0,
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

  // Handling loading and error states
  if (loadingCategories) return <p>Loading categories...</p>;
  if (errorCategories) return <p>Error loading categories!</p>;

  return (
    <div className="categories-section" id="categories-section">
      <div className="container">
        <h3 className="section-head">Categories</h3>
        <Slider {...settings} className="slider-container">
          {categories?.category?.map((category) => (
            <div key={category._id} className="category">
              <p> {category.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Categories;
