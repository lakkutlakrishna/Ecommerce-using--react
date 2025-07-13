import React from 'react';
import '../styles/Supportus.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

const Support = () => {
    const navigate=useNavigate();
    const handlediv=()=>{
        navigate('/');
    }
  return (
    <div className="support-container">
      {/* Breadcrumb */}
      <div className="support-breadcrumb">
        <a href="#" className="support-breadcrumb-link">SUPPORT 24/7 PAGE</a>
      </div>

      {/* Title Section */}
      <h1 className="support-title">HAVE A QUESTION?</h1>
      <div className="support-title-underline"></div>
      <p className="support-description">
        Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>

      {/* Cards Section */}
      <div className="support-cards">
        <div className="support-card">
          <div className="support-card-icon">
            <i className="fas fa-calendar-plus"></i>
          </div>
          <div className="support-card-content" onClick={handlediv}>
            <h2 className="support-card-title">KNOWLEDGE BASE</h2>
            <p className="support-card-text">
              Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
          <div className="support-card-arrow">
            <i className="fas fa-arrow-right"></i>
          </div>
        </div>
        <div className="support-card">
          <div className="support-card-icon">
            <i className="fas fa-cube"></i>
          </div>
          <div className="support-card-content" onClick={handlediv}>
            <h2 className="support-card-title">KNOWLEDGE BASE</h2>
            <p className="support-card-text">
              Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
          <div className="support-card-arrow">
            <i className="fas fa-arrow-right"></i>
          </div>
        </div>
        <div className="support-card">
          <div className="support-card-icon">
            <i className="fas fa-question-circle"></i>
          </div>
          <div className="support-card-content" onClick={handlediv}>
            <h2 className="support-card-title">KNOWLEDGE BASE</h2>
            <p className="support-card-text">
              Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
          <div className="support-card-arrow">
            <i className="fas fa-arrow-right"></i>
          </div>
        </div>
        <div className="support-card">
          <div className="support-card-icon">
            <i className="fas fa-folder"></i>
          </div>
          <div className="support-card-content" onClick={handlediv}>
            <h2 className="support-card-title">KNOWLEDGE BASE</h2>
            <p className="support-card-text">
              Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
          <div className="support-card-arrow">
            <i className="fas fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;