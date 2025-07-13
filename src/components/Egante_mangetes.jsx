import React from "react";
import ShopBy from "./ShopBy";
import Best_Seller from "./Best_Seller";
import ItemShow from "./ItemShow";
import Sub_Egante_mangetes from "./Sub_Egante_mangetes";
import "../styles/Egante_mangetes.css";

const Egante_mangetes = () => {
  return (
    <div>
      {/* Breadcrumb Section */}
      <div className="Egante_mangetes-breadcrumb">
        <a href="#" className="Egante_mangetes-breadcrumb-link">Home</a>
        <span className="Egante_mangetes-breadcrumb-separator">&gt;</span>
        <a href="#" className="Egante_mangetes-breadcrumb-link">Electronics</a>
        <span className="Egante_mangetes-breadcrumb-separator">&gt;</span>
        <span>Egante Mangetes</span>
      </div>

      {/* Two-column Layout */}
      <div className="Egante_mangetes-container">
        {/* Left Section */}
        <div className="Egante_mangetes-left-section">
          <ShopBy />
          <Best_Seller />
        </div>

        {/* Right Section */}
        <div className="Egante_mangetes-right-section">
          <Sub_Egante_mangetes />
          <ItemShow />
        </div>
      </div>
    </div>
  );
};

export default Egante_mangetes;