import React from "react";

const UserDashboard = () => {
  const userAuth = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="admin-dashoard">
      <p>Hello, {userAuth?.name}!</p>
      <h2>Welcome to Dhasboard</h2>
    </div>
  );
};

export default UserDashboard;
