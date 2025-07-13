import React from 'react';
import '../styles/Women_pearl_jewelry.css'; // Import the CSS file
import ShopBy from './ShopBy';
import Best_Seller from './Best_Seller';
import Sub_pearly_Jewelry from './Sub_pearly_Jewelry';
import ItemShow from './ItemShow';

const Women_pearl_jewelry = () => {
    return (
        <div className="Women_pearl_jewelry-container">
            {/* Breadcrumb */}
            <div className="Women_pearl_jewelry-breadcrumb">
                <a href="#" className="Women_pearl_jewelry-breadcrumb-link">Home</a>
                <span className="Women_pearl_jewelry-breadcrumb-separator">&gt;</span>
                <a href="#" className="Women_pearl_jewelry-breadcrumb-link">Account</a>
                <span className="Women_pearl_jewelry-breadcrumb-separator">&gt;</span>
                <span>Pearl Women_pearl_jewelry</span>
            </div>

            {/* Main Content */}
            <div className="Women_pearl_jewelry-main-content">
                {/* Left Section */}
                <div className="Women_pearl_jewelry-left-section">
                    <ShopBy />
                    <Best_Seller />
                    
                </div>

                {/* Right Section */}
                <div className="Women_pearl_jewelry-right-section">
                    <Sub_pearly_Jewelry />
                    <ItemShow/>
                </div>
                {/* <ItemShow/> */}
            </div>
        </div>
    );
};

export default Women_pearl_jewelry;