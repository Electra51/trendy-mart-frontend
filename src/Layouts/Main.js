import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div>
        {" "}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
