import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import "./navbar.css";
import logo from "../../../assets/logo.png";
import Button from "../../Common/Button/Button";
import megaMenu from "../../../assets/megamenuPic.jpg";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav>
      <div className="container">
        <div className="wrapper">
          <div className="logo">
            <a href="#">
              <img src={logo} alt="" />
            </a>
            <p>TrendyMart</p>
          </div>
          <MdMenu className="mobile-menu-icon" onClick={toggleMobileMenu} />
          <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
            <RxCross2
              className="mobile-menu-icon-cross"
              onClick={toggleMobileMenu}
            />
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Categories</a>
              <div className="mega-box">
                <div className="content">
                  <div className="row1">
                    <img src={megaMenu} alt="example" />
                  </div>
                  <div className="row">
                    <header>Design Services</header>
                    <ul className="mega-links">
                      <li>
                        <a href="#">About</a>
                      </li>
                      <li>
                        <a href="#">About</a>
                      </li>
                      <li>
                        <a href="#">About</a>
                      </li>
                      <li>
                        <a href="#">About</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Design Services</header>
                    <ul className="mega-links">
                      <li>
                        <a href="#">About</a>
                      </li>
                      <li>
                        <a href="#">About</a>
                      </li>
                      <li>
                        <a href="#">About</a>
                      </li>
                      <li>
                        <a href="#">About</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Design Services</header>
                    <ul className="mega-links">
                      <li>
                        <a href="#">About</a>
                      </li>
                      <li>
                        <a href="#">About</a>
                      </li>
                      <li>
                        <a href="#">About</a>
                      </li>
                      <li>
                        <a href="#">About</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Cart(0)</a>
            </li>
            <li>
              <Link to="sign-in">
                <Button title="Sign In" color="#5A5CDA" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
