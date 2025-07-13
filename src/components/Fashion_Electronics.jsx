import React from "react";
import ShopBy from "./ShopBy";
import Best_Seller from "./Best_Seller";
import ItemShow from "./ItemShow";
import Sub_Fashion_Electronics from "./Sub_Fashion_Electronics";
import "../styles/Fashion_Electronics.css";

const Fashion_Electronics = () => {
  return (
    <div>
      {/* Breadcrumb Section */}
      <div className="Fashion_Electronics-breadcrumb">
        <a href="#" className="Fashion_Electronics-breadcrumb-link">Home</a>
        <span className="Fashion_Electronics-breadcrumb-separator">&gt;</span>
        <a href="#" className="Fashion_Electronics-breadcrumb-link">Electronics</a>
        <span className="Fashion_Electronics-breadcrumb-separator">&gt;</span>
        <span>Fashion</span>
      </div>

      {/* Two-column Layout */}
      <div className="Fashion_Electronics-container">
        {/* Left Section */}
        <div className="Fashion_Electronics-left-section">
          <ShopBy />
          <Best_Seller />
        </div>

        {/* Right Section */}
        <div className="Fashion_Electronics-right-section">
          <Sub_Fashion_Electronics />
          <ItemShow />
        </div>
      </div>
    </div>
  );
};

export default Fashion_Electronics;