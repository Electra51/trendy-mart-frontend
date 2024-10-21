import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { menus } from "../../Common/data/data.js";
import navLogo from "../../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import profileImg from "../../../assets/user.jpg";
import toast from "react-hot-toast";
import "./sidebar.css";
const SideBar = () => {
  const userAuth = JSON.parse(localStorage.getItem("user"));
  const filteredMenus = menus.filter((menu) => menu.role === userAuth?.role);
  console.log("userAuth?.name", userAuth.name);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
    toast.success("logout successfully");
  };

  return (
    <div className="sidebar">
      <div>
        <div className="logo">
          <img src={navLogo} alt="" />
          <p>TrendyMart</p>
        </div>

        <ul className=" ">
          {filteredMenus.map((item, i) => (
            <React.Fragment key={i}>
              <li className="">
                <NavLink to={item.to} className="">
                  <p> {item.title} </p>
                </NavLink>
              </li>
            </React.Fragment>
          ))}
        </ul>
        <div className="sidebar-user">
          {userAuth && (
            <div className="user-content">
              <div className="sidebar-profile">
                <img alt="Profile image" src={profileImg} />{" "}
                <p>{userAuth?.name}</p>
              </div>
              <div className="logout" onClick={handleLogout}>
                <MdLogout className="" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
