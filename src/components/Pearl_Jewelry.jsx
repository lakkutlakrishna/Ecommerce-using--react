import React from "react";
import ShopBy from "./ShopBy";
import Best_Seller from "./Best_Seller";
import ItemShow from "./ItemShow";
import Sub_pearl_jewelry from "./Sub_pearl_jewelry";
import "../styles/Pearl_Jewelry.css";

const Pearl_Jewelry = () => {
  return (
    <div>
      {/* Breadcrumb Section */}
      <div className="pearl_jewelry-breadcrumb">
        <a href="#" className="pearl_jewelry-breadcrumb-link">Home</a>
        <span className="pearl_jewelry-breadcrumb-separator">&gt;</span>
        <a href="#" className="pearl_jewelry-breadcrumb-link">Electronics</a>
        <span className="pearl_jewelry-breadcrumb-separator">&gt;</span>
        <span>pearl_jewelry</span>
      </div>

      {/* Two-column Layout */}
      <div className="pearl_jewelry-container">
        {/* Left Section */}
        <div className="pearl_jewelry-left-section">
          <ShopBy />
          <Best_Seller />
        </div>

        {/* Right Section */}
        <div className="pearl_jewelry-right-section">
          <Sub_pearl_jewelry />
          <ItemShow />
        </div>
      </div>
    </div>
  );
};

export default Pearl_Jewelry;