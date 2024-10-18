import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <h2>navbar</h2>
      <Outlet />
      <h3>Footer</h3>
    </div>
  );
};

export default Main;
