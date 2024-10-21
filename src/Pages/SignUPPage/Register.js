import React, { useState } from "react";
import { useRegisterUserMutation } from "../../Redux/authApi";
import "../SignInPage/login.css";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import HelmetComponent from "../../Components/Shared/HelmetComponent/HelmetComponent";
import toast from "react-hot-toast";
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const [registerUser, { isLoading, error }] = useRegisterUserMutation();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(formData).unwrap();

      console.log("first", formData);
      toast.success("Registration Successfully done");
      navigate("/sign-in");
    } catch (err) {
      console.error("Failed to register:", err);
    }
  };

  return (
    <div className="login-container">
      <HelmetComponent title={"Register | TrendyMart"} />
      <div className="login-left">
        <div className="content">
          <div className="logo">
            <img src={logo} alt="logo" />
            <p>TrendyMart</p>
          </div>

          <h1>Welcome Back!</h1>
        </div>
      </div>
      <div className="login-right">
        <form onSubmit={handleSubmit}>
          <p className="login-text">SIGNUP</p>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <button className="login-button" type="submit" disabled={isLoading}>
            Register
          </button>
          {error && <p>{error.data.message}</p>}
          <div className="no-account">
            <p>Already have an account?</p>
            <Link to="/sign-in">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
