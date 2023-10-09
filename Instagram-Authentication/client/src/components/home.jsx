import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";

export default function Home() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get("http://localhost:5000/getuser", {
          withCredentials: true,
        });
        setUsername(response.data.username); // Update the username state
        setEmail(response.data.email); // Update the email state
        setBio(response.data.bio); // Update the bio state
      } catch (error) {
        navigate("/login");
      }
    };

    checkAuth();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:5000/logout", {
        withCredentials: true,
      });
      navigate("/login");
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <>
      <button className="logout" onClick={handleLogout}>
        Logout
      </button>
      <div className="container flex">
        <div className="profile-img">
          <img
            src="https://source.unsplash.com/random/200x200?sig=1"
            alt="profile-img"
          />
        </div>
        <div className="user-details flex">
          <span id="username">@{username}</span>
          <span id="bio">{bio}</span>
          <span id="email">{email}</span>
          <span>Followers: 26</span>
        </div>
      </div>
    </>
  );
}
