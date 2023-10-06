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
        const response = await axios.get("http://localhost:5000/check-auth", {
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
      await axios.get('http://localhost:5000/logout',
      {
        withCredentials: true 
      })
      navigate('/login');
    }
    catch(e) {
      alert(e.message);
    }
  }

  return (
    <>
      <button className="logout" onClick={handleLogout}>Logout</button>
      <div className="container flex">
        <div className="profile-img">
          <img
            src="https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="profile-img"
          />
        </div>
        <div className="user-details flex">
          <span id="username">@{username}</span>
          <span id="bio">{bio}</span>
          <span id="email">{email}</span>
          <span>Followers: 1000</span>
        </div>
      </div>
    </>
  );
}
