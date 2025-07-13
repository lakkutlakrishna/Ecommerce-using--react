import React from "react";
import "../styles/Search.css"; // Import the CSS file

const Search = ({ onClose }) => {
  return (
    <div className="other-search-overlay">
      <div className="other-search-container">
        {/* Header */}
        <div className="other-search-header">
          <div className="other-header-content">
            <i className="fas fa-search"></i>
            <span>SEARCH</span>
          </div>
          <button className="other-close-button" onClick={onClose}>
            &times; {/* Close symbol */}
          </button>
        </div>

        {/* Main Content */}
        <div className="other-search-body">
          {/* Search Input */}
          <div className="other-search-input-container">
            <input type="text" placeholder="Search" className="other-search-input" />
            <i className="fas fa-search other-search-icon"></i>
          </div>

          {/* Search Button */}
          <button className="other-search-button">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Search;