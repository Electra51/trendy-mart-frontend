import React from "react";
import logo from "../../../assets/logo.png";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-contain">
          <div>
            <div className="footer-logo">
              <img src={logo} alt="" />

              <p>TrendyMart</p>
            </div>
            <p className="">Got questions? Call us 24/7!</p>
            <div className="">
              <p>03 111 666 144</p>
              <p>0317 1777015.</p>
            </div>
            <div className="">
              <p className="">Contact info</p>
              <p className="">info@winstore.pk</p>
            </div>
            <div className="">{/* <SocialIcon /> */}</div>
          </div>
          <div>
            <p className="">Trending</p>
            <div className="">
              <p className="">Installments</p>
              <p className="">Electronics</p>
              <p className="">Grocery</p>
              <p className="">Health & Beauty</p>
              <p className="">Home Appliances</p>
              <p className="">Mobile Accessories</p>
            </div>
          </div>
          <div>
            <p className="">Information</p>
            <div className="">
              <p className="">About Us</p>
              <p className="">Contact Us</p>
              <p className="">FAQs</p>
              <p className="">Shipping & Return</p>
              <p className="">Privacy policy</p>
              <p className="">Terms & Conditions</p>
            </div>
          </div>
          <div>
            <p className="">Customer Care</p>
            <div className="">
              <p className="">My Account</p>
              <p className="">Track Your Order</p>
              <p className="">Recently Viewed</p>
              <p className="">Wishlist</p>
              <p className="">Compare</p>
              <p className="">Become a Vendor</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="">
          © 2024 TrendyMart made by Safayet Nur. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
