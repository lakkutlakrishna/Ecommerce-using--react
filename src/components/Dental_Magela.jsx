
import React from "react";
import ShopBy from "./ShopBy";
import Best_Seller from "./Best_Seller";
import ItemShow from "./ItemShow";
import Sub_Dental_magela from "./Sub_Dental_magela";
import "../styles/Dental_Magela.css";

const Dental_Magela=()=>{
  return (
    <div>
      {/* Breadcrumb Section */}
      <div className="Dental_magela-breadcrumb">
        <a href="#" className="Dental_magela-breadcrumb-link">Home</a>
        <span className="Dental_magela-breadcrumb-separator">&gt;</span>
        <a href="#" className="Dental_magela-breadcrumb-link">Electronics</a>
        <span className="Dental_magela-breadcrumb-separator">&gt;</span>
        <span>Dental Magela</span>
      </div>

      {/* Two-column Layout */}
      <div className="Dental_magela-container">
        {/* Left Section */}
        <div className="Dental_magela-left-section">
          <ShopBy />
          <Best_Seller />
        </div>

        {/* Right Section */}
        <div className="Dental_magela-right-section">
          <Sub_Dental_magela />
          <ItemShow />
        </div>
      </div>
    </div>
  );
};

export default Dental_Magela;