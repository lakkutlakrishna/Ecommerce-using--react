import React, { useState } from "react";
import "../../styles/UsersPage.css";
import UserDashboard from "../UserDashboard/UserDashboard";
import {
  LogOut,
  PaintBucket,
  User,
  Settings,
  Heart,
} from "lucide-react"; // Icons
import Navbar from "../Navbar";

const UsersPage = () => {
  const [bgColor, setBgColor] = useState("#f0f0f0"); // Default background color
  const colors = ["#f0f0f0", "#FFDEE9", "#A8DADC", "#F5E8C7", "#2C3E50"]; // Theme colors
  const [activeTab, setActiveTab] = useState("profile"); // State for tab navigation

  // Change background color
  const changeBackground = () => {
    const nextColor = colors[(colors.indexOf(bgColor) + 1) % colors.length];
    setBgColor(nextColor);
  };

  // Handle logout
  const handleLogout = () => {
    alert("Logging out...");
    // Add logout logic (clear session, redirect to login page, etc.)
  };

  return (
    <div className="users-page" style={{ backgroundColor: bgColor }}>
      {/* Top Bar */}
      <div className="top-bar">
        {/* Left Section */}
        <div className="left">
        {activeTab === "profile" && (
          <div className="to">
            <h1>Welcome, John Doe!</h1>
            <p>Your dashboard with user-specific content will appear here.</p>
            <div className="user-info">
              <h3>Profile Details</h3>
              <ul>
                <li><strong>Name:</strong> John Doe</li>
                <li><strong>Email:</strong> johndoe@example.com</li>
                <li><strong>Account Created:</strong> Jan 10, 2024</li>
              </ul>
            </div>
          </div>
        )}
          {/* <button className="theme-button" onClick={changeBackground}>
            <PaintBucket size={20} /> Change Background
          </button> */}
        </div>

        {/* Right Section */}
        <div className="right">
          <button className="logout-button" onClick={handleLogout}>
            <LogOut size={20} /> Logout
          </button>
        </div>
        
      </div>
      <Navbar />
      {/* Fixed User Dashboard */}
      <div className="fixed-dashboard">
        <UserDashboard />
      </div>
      
    </div>
    
  );
};

export default UsersPage;