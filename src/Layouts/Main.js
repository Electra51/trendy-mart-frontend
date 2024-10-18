import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <h3>Footer</h3>
    </div>
  );
};

export default Main;
