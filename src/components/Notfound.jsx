import React, { useState } from 'react';
import Information from './Information'; // Import the Information component
import '../styles/NotFound.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate=useNavigate();
  const [isPopupOpen, setPopupOpen] = useState(true); // State to control popup visibility

  // Function to close the popup
  const closePopup = () => {
    setPopupOpen(false);
  };
  const handlec=()=>{
    navigate('/');
  }

  return (
    <div className="notfound-container">
      {/* Popup */}
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <Information onClose={closePopup} /> {/* Pass the close function as a prop */}
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className={`notfound-main ${isPopupOpen ? 'blur' : ''}`}>
        <div className="notfound-breadcrumb">
          <i className="fas fa-home"></i> &gt; THE PAGE YOU REQUESTED CANNOT BE FOUND!
        </div>
        <div className="notfound-content">
          <div className="notfound-oops">
            <div className="notfound-oops-background">OOPS!!!</div>
            <div className="notfound-oops-foreground">404</div>
          </div>
          <div className="notfound-title">PAGE NOT FOUND</div>
          <div className="notfound-message">
            <h1>OOPS, THE PAGE YOU REQUESTED CANNOT BE FOUND!</h1>
            <p>The page you requested cannot be found.</p>
            <div className="notfound-buttons">
              <button className="notfound-button" onClick={handlec}>Continue</button>
              <button className="notfound-button">Go Support</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;