import React, { useState } from "react";
import { useLoginUserMutation } from "../../Redux/authApi";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import logo from "../../assets/logo.png";
import HelmetComponent from "../../Components/Shared/HelmetComponent/HelmetComponent";
import toast from "react-hot-toast";
const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loginUser, { isLoading, error }] = useLoginUserMutation();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(formData).unwrap();
      toast.success("Login Successfully done");

      // Check user role and navigate accordingly
      if (response.user.role === 1) {
        navigate("/admin-dashboard");
      } else {
        navigate("/");
      }
    } catch (err) {
      console.error("Failed to login:", err);
    }
  };

  return (
    <div className="login-container">
      <HelmetComponent title={"Login | TrendyMart"} />
      <div className="login-left">
        <div className="content">
          <div className="logo">
            <img src={logo} alt="logo" />
            <p>TrendyMart</p>
          </div>

          <h1>Welcome to our website</h1>
        </div>
      </div>
      <div className="login-right">
        <form onSubmit={handleSubmit}>
          <p className="login-text">LOGIN</p>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
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
            Login
          </button>
          {error && <p>{error.data.message}</p>}
          <div className="no-account">
            <p>Don't have an account?</p>
            <Link to="/signup">Signup</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
