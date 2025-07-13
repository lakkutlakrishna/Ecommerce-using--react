import React from "react";
import ShopBy from "./ShopBy";
import Best_Seller from "./Best_Seller";
import ItemShow from "./ItemShow";
import Sub_Angene_mahn from "./Sub_Angene_mahn";
import "../styles/Angene_mahn.css";


const Angene_mahn = () => {
  return (
    <div>
      {/* Breadcrumb Section */}
      <div className="Angene_mahn-breadcrumb">
        <a href="#" className="Angene_mahn-breadcrumb-link">Home</a>
        <span className="Angene_mahn-breadcrumb-separator">&gt;</span>
        <a href="#" className="Angene_mahn-breadcrumb-link">Electronics</a>
        <span className="Angene_mahn-breadcrumb-separator">&gt;</span>
        <span>Angene Mafin</span>
      </div>

      {/* Two-column Layout */}
      <div className="Angene_mahn-container">
        {/* Left Section */}
        <div className="Angene_mahn-left-section">
          <ShopBy />
          <Best_Seller />
        </div>

        {/* Right Section */}
        <div className="Angene_mahn-right-section">
          <Sub_Angene_mahn />
          <ItemShow />
        </div>
      </div>
    </div>
  );
};

export default Angene_mahn;