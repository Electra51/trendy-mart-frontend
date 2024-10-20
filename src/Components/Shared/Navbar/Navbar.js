import React, { useState } from "react";
import "./navbar.css";
import { MdLogout, MdMenu } from "react-icons/md";
import logo from "../../../assets/logo.png";
import Button from "../../Common/Button/Button";
import { RxCross2 } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import userImg from "../../../assets/user.jpg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const userAuth = JSON.parse(localStorage.getItem("user"));
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.length;

  const navigate = useNavigate();
  //logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
    toast.success("logout successfully");
  };

  // toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // scroll to categories section
  const scrollToCategories = () => {
    const element = document.getElementById("categories-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav>
      <div className="container">
        <div className="wrapper">
          <div className="logo">
            <Link to={"/"}>
              <img src={logo} alt="TrendyMart Logo" />
            </Link>
            <p>TrendyMart</p>
          </div>

          <MdMenu className="mobile-menu-icon" onClick={toggleMobileMenu} />

          <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
            <RxCross2
              className="mobile-menu-icon-cross"
              onClick={toggleMobileMenu}
            />
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#categories-section" onClick={scrollToCategories}>
                Categories
              </a>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/cart">Cart({cartCount})</Link>
            </li>

            {userAuth ? (
              <li className="nav-user">
                <img src={userImg} alt="" />
                <p>{userAuth?.name}</p>
              </li>
            ) : (
              <li>
                <Link to="sign-in">
                  <Button title="Sign In" color="#5A5CDA" />
                </Link>
              </li>
            )}
            {userAuth && (
              <li className="logout" onClick={handleLogout}>
                <MdLogout className="" />
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
