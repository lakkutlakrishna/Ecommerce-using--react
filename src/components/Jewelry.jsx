import React from 'react';
import '../styles/Jewelry.css'; // Import the CSS file
import ShopBy from './ShopBy';
import Best_Seller from './Best_Seller';
import Sub_Jewelry from './Sub_Jewelry';
import ItemShow from './ItemShow';

const Jewelry = () => {
    return (
        <div className="jewelry-container">
            {/* Breadcrumb */}
            <div className="jewelry-breadcrumb">
                <a href="#" className="jewelry-breadcrumb-link">Home</a>
                <span className="jewelry-breadcrumb-separator">&gt;</span>
                <a href="#" className="jewelry-breadcrumb-link">Account</a>
                <span className="jewelry-breadcrumb-separator">&gt;</span>
                <span>Jewelry</span>
            </div>

            {/* Main Content */}
            <div className="jewelry-main-content">
                {/* Left Section */}
                <div className="jewelry-left-section">
                    <ShopBy />
                    <Best_Seller />
                    
                </div>

                {/* Right Section */}
                <div className="jewelry-right-section">
                    <Sub_Jewelry />
                    <ItemShow/>
                </div>
                {/* <ItemShow/> */}
            </div>
        </div>
    );
};

export default Jewelry;