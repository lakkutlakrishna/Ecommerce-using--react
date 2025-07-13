import React from "react";
import ShopBy from "./ShopBy";
import Best_Seller from "./Best_Seller";
import ItemShow from "./ItemShow";
import Sub_Rengae_manges from "./Sub_Rengae_manges";
import "../styles/Rengae_manges.css";


const Rengae_manges = () => {
  return (
    <div>
      {/* Breadcrumb Section */}
      <div className="Rengae_manges-breadcrumb">
        <a href="#" className="Rengae_manges-breadcrumb-link">Home</a>
        <span className="Rengae_manges-breadcrumb-separator">&gt;</span>
        <a href="#" className="Rengae_manges-breadcrumb-link">Electronics</a>
        <span className="Rengae_manges-breadcrumb-separator">&gt;</span>
        <span>Rengae manges</span>
      </div>

      {/* Two-column Layout */}
      <div className="Rengae_manges-container">
        {/* Left Section */}
        <div className="Rengae_manges-left-section">
          <ShopBy />
          <Best_Seller />
        </div>

        {/* Right Section */}
        <div className="Rengae_manges-right-section">
          <Sub_Rengae_manges />
          <ItemShow />
        </div>
      </div>
    </div>
  );
};

export default Rengae_manges;