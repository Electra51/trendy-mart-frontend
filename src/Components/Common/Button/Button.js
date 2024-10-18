import React from "react";
const Button = ({ title, color }) => {
  return (
    <button
      style={{
        backgroundColor: color,
        border: 0,
        borderRadius: "5px",
        fontWeight: 600,
        fontSize: 15,
        padding: "7px 15px",
        color: "white",
      }}>
      {title}
    </button>
  );
};

export default Button;
