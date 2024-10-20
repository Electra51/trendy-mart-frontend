import React from "react";
import logo from "../../../assets/logo.png";
import "./footer.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-contain">
          <div className="footer-left">
            <div className="footer-logo">
              <Link to={"/"}>
                <img src={logo} alt="TrendyMart Logo" />
              </Link>
              <p>TrendyMart</p>
            </div>
            <p className="">Got questions? Call us 24/7!</p>
            <p>03 111 666 144</p>
            <div className="">
              <p className="">Contact info</p>
              <p className="">info@winstore.pk</p>
              <div className="social-icons">
                <FaFacebook />
                <FaInstagram />
                <FaLinkedin />
              </div>
            </div>
          </div>
          <div>
            <p className="footer-heading">Trending</p>
            <div className="footer-para">
              <p className="">Installments</p>
              <p className="">Electronics</p>
              <p className="">Grocery</p>
              <p className="">Health & Beauty</p>
              <p className="">Home Appliances</p>
              <p className="">Mobile Accessories</p>
            </div>
          </div>
          <div>
            <p className="footer-heading">Information</p>
            <div className="footer-para">
              <p className="">About Us</p>
              <p className="">Contact Us</p>
              <p className="">FAQs</p>
              <p className="">Shipping & Return</p>
              <p className="">Privacy policy</p>
              <p className="">Terms & Conditions</p>
            </div>
          </div>
          <div>
            <p className="footer-heading">Customer Care</p>
            <div className="footer-para">
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
    </footer>
  );
};

export default Footer;
