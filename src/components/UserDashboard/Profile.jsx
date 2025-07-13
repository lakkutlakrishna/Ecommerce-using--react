import React from "react";
import "../../styles/profile.css";
const Profile = () => {
  return (
    <div className="profile-section">
      <h2>Profile & Personal Details</h2>
      <div className="profile-details">
        <div className="profile-picture">
          <img src="https://via.placeholder.com/100" alt="Profile" />
          <button>Upload New Photo</button>
        </div>
        <div className="personal-info">
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Email:</strong> johndoe@example.com</p>
          <p><strong>Phone:</strong> +1 234 567 890</p>
          <button>Edit Profile</button>
        </div>
      </div>
      <div className="address-management">
        <h3>Saved Addresses</h3>
        <ul>
          <li>Home: 123 Main St, City, Country</li>
          <li>Work: 456 Office St, City, Country</li>
        </ul>
        <button>Add New Address</button>
      </div>
    </div>
  );
};

export default Profile;