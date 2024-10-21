import React from "react";
import { Outlet } from "react-router-dom";

import HelmetComponent from "../Components/Shared/HelmetComponent/HelmetComponent";
import SideBar from "../Components/Shared/SideBar/SideBar";
import "./dashboardLayout.css";
const DashboardLayout = () => {
  return (
    <div>
      <HelmetComponent title={"Dashboard | deostore"} />
      <div className="dashboard-part">
        <SideBar />
        <div className="dashboard-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
