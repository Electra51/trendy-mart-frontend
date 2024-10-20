import React from "react";
import "./admindashboard.css";
const AdminDashboard = () => {
  const userAuth = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="admin-dashoard">
      <p>Hello, {userAuth?.name}!</p>
      <h2>Welcome to Dhasboard</h2>
    </div>
  );
};

export default AdminDashboard;
