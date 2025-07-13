import React from "react";
import ShopBy from "./ShopBy";
import Best_Seller from "./Best_Seller";
import ItemShow from "./ItemShow";
import Sub_Macs from "./Sub_Macs";
import "../styles/Macs.css";

const Macs = () => {
  return (
    <div>
      {/* Breadcrumb Section */}
      <div className="Macs-breadcrumb">
        <a href="#" className="Macs-breadcrumb-link">Home</a>
        <span className="Macs-breadcrumb-separator">&gt;</span>
        <a href="#" className="Macs-breadcrumb-link">Electronics</a>
        <span className="Macs-breadcrumb-separator">&gt;</span>
        <span>Macs</span>
      </div>

      {/* Two-column Layout */}
      <div className="Macs-container">
        {/* Left Section */}
        <div className="Macs-left-section">
          <ShopBy />
          <Best_Seller />
        </div>

        {/* Right Section */}
        <div className="Macs-right-section">
          <Sub_Macs />
          <ItemShow />
        </div>
      </div>
    </div>
  );
};

export default Macs;