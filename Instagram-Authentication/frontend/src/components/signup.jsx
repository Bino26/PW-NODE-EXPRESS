import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";

export default function Signup() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/signup",
        {
          name,
          username,
          email,
          password,
          bio,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.error) {
        alert(response.error);
      }
      // Handle successful response
      navigate("/login"); // Navigate to the login page
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <form className="container flex" id="signup-form">
      <h1>Instagram SignUp</h1>
      <div className="input-box flex">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
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
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
      <div className="input-box flex">
        <label htmlFor="bio">Bio</label>
        <input
          type="text"
          id="bio"
          placeholder="Enter your Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>Sign Up</button>
      <div className="forgot flex">
        <span>Forgot Password?</span>
        <NavLink to="/login">Login</NavLink>
      </div>
    </form>
  );
}
