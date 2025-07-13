import React from 'react';
import '../styles/ItemShow.css'; // Import the CSS file

const ItemShow = () => {
  return (
    <div className="ItemShow-container">
      {/* First Ad */}
      <div className="ItemShow-item-card ItemShow-item-card-1">
        <div className="ItemShow-content">
          <h2>COLORFUL KICK</h2>
          <h1>PUNCHY SANDALS</h1>
          <a href="#">See More</a>
        </div>
        <div className="ItemShow-image-group">
          
        </div>
        <div className="ItemShow-price">$140.00</div>
      </div>

      {/* Second Ad */}
      <div className="ItemShow-item-card ItemShow-item-card-2">
        <div className="ItemShow-content">
          <h1>GOING SOMEWHERE?</h1>
          <a href="#">See More</a>
        </div>
        <div className="ItemShow-image-group">
          
        </div>
        <div className="ItemShow-price">$60.00</div>
      </div>
    </div>
  );
};

export default ItemShow;