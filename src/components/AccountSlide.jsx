import React from "react";
import ReactDOM from "react-dom";
import "../styles/AccountSlide.css"; // Import the corresponding CSS file

const AccountSlide = ({ onClose }) => {
  return ReactDOM.createPortal(
    <div className="account-slide-overlay">
      {/* Dimmed Background */}
      <div className="dimmed-background" onClick={onClose}></div>

      {/* Account Slide Container */}
      <div className="account-slide-container">
        {/* Header */}
        <div className="account-slide-header">
          <div className="account-slide-header-content">
            <i className="fas fa-user account-slide-icon"></i>
            <span className="account-slide-title">MY ACCOUNT</span>
          </div>
          <i className="fas fa-times account-slide-close-icon" onClick={onClose}></i>
        </div>

        {/* Main Content */}
        <div className="account-slide-body">
          {/* Currency and Language Dropdowns */}
          <div className="account-slide-dropdown-container">
            <div className="account-slide-dropdown-item">
              <label className="account-slide-label">Currency</label>
              <div className="account-slide-custom-select-wrapper">
                <select className="account-slide-custom-select">
                  <option>€ Euro</option>
                  <option>$ Dollar</option>
                  <option>£ Pound</option>
                </select>
              </div>
            </div>
            <div className="account-slide-dropdown-item">
              <label className="account-slide-label">Language</label>
              <div className="account-slide-custom-select-wrapper">
                <select className="account-slide-custom-select">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="account-slide-divider" />

          {/* Icons Grid */}
          <div className="account-slide-icon-grid">
            <div className="account-slide-icon-container">
              <i className="fas fa-tachometer-alt account-slide-icon"></i>
              <div className="account-slide-icon-text">HISTORY</div>
            </div>
            <div className="account-slide-icon-container">
              <i className="fas fa-shopping-cart account-slide-icon"></i>
              <div className="account-slide-icon-text">SHOPPING CART</div>
            </div>
            <div className="account-slide-icon-container">
              <i className="fas fa-pen-square account-slide-icon"></i>
              <div className="account-slide-icon-text">REGISTER</div>
            </div>
            <div className="account-slide-icon-container">
              <i className="fas fa-user-friends account-slide-icon"></i>
              <div className="account-slide-icon-text">ACCOUNT</div>
            </div>
            <div className="account-slide-icon-container">
              <i className="fas fa-cloud-download-alt account-slide-icon"></i>
              <div className="account-slide-icon-text">DOWNLOAD</div>
            </div>
            <div className="account-slide-icon-container">
              <i className="fas fa-sign-in-alt account-slide-icon"></i>
              <div className="account-slide-icon-text">LOGIN</div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal-root") // Render into the portal container
  );
};

export default AccountSlide;