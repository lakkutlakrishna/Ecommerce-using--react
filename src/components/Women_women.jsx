import React from 'react';
import '../styles/Women_women.css'; // Import the CSS file
import ShopBy from './ShopBy';
import Best_Seller from './Best_Seller';
import Sub_Women_women from './Sub_Women_women';
import ItemShow from './ItemShow';

const Women_women = () => {
    return (
        <div className="Women_women-container">
            {/* Breadcrumb */}
            <div className="Women_women-breadcrumb">
                <a href="#" className="Women_women-breadcrumb-link">Home</a>
                <span className="Women_women-breadcrumb-separator">&gt;</span>
                <a href="#" className="Women_women-breadcrumb-link">Account</a>
                <span className="Women_women-breadcrumb-separator">&gt;</span>
                <span>Women_women</span>
            </div>

            {/* Main Content */}
            <div className="Women_women-main-content">
                {/* Left Section */}
                <div className="Women_women-left-section">
                    <ShopBy />
                    <Best_Seller />
                    
                </div>

                {/* Right Section */}
                <div className="Women_women-right-section">
                    <Sub_Women_women />
                    <ItemShow/>
                </div>
                {/* <ItemShow/> */}
            </div>
        </div>
    );
};

export default Women_women;