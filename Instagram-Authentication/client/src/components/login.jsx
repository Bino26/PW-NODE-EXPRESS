import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

export default function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        {
          username,
          password,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        // Redirect to the home page
        navigate("/");
      } else {
        // Login failed, display an error message
        toast.error(response.data.error);
      }
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  return (
    <form className="container flex" id="login-form" onSubmit={handleSubmit}>
      <ToastContainer />
      <h1>Instagram Login</h1>
      <div className="input-box flex">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-box flex">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
      <div className="forgot flex">
        <span>Forgot Password?</span>
        <NavLink to="/signup">Signup</NavLink>
      </div>
    </form>
  );
}
