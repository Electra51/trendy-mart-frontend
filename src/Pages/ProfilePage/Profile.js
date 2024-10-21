import React from "react";

const Profile = () => {
  const userAuth = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
      <div className="add-button">
        <p>My Profile</p>
      </div>
      <div className="category-list">
        <p>Name: {userAuth?.name}</p>
        <p>Name: {userAuth?.email}</p>
        <p>Name: {userAuth?.phone}</p>
      </div>
    </div>
  );
};

export default Profile;
