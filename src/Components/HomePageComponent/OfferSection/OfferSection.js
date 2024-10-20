import React from "react";
import "./offer.css";
import watchOffer from "../../../assets/watchOffer.png";
import Button from "../../Common/Button/Button";
const OfferSection = () => {
  return (
    <section class="offer-section">
      <img src={watchOffer} alt="Book Offer" width="300" />

      <div>
        <p class="offer-title">
          Watch <span>50% Off</span> Now! Don't miss this great deal!
        </p>
        <div class="btns">
          <Button title={"Purchase Now"} color={"#5a5cda"} />
          <button class="n">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
