import React from "react";
import "../../styles/Security.css";

const Security = () => {
  return (
    <div className="security">
      <h2>Security & Privacy Settings</h2>
      <div className="security-options">
        <button>Change Password</button>
        <button>Enable Two-Factor Authentication</button>
        <button>Manage Login Activity</button>
        <button>Delete Account</button>
      </div>
    </div>
  );
};

export default Security;