import React from 'react';
import '../styles/Delicacies.css'; // Import the CSS file
import ShopBy from './ShopBy';
import Best_Seller from './Best_Seller';
import Sub_Delicacies from './Sub_Delicacies';
import ItemShow from './ItemShow';

const Delicacies = () => {
    return (
        <div className="Delicacies-container">
            {/* Breadcrumb */}
            <div className="Delicacies-breadcrumb">
                <a href="#" className="Delicacies-breadcrumb-link">Home</a>
                <span className="Delicacies-breadcrumb-separator">&gt;</span>
                <a href="#" className="Delicacies-breadcrumb-link">Account</a>
                <span className="Delicacies-breadcrumb-separator">&gt;</span>
                <span>Delicacies</span>
            </div>

            {/* Main Content */}
            <div className="Delicacies-main-content">
                {/* Left Section */}
                <div className="Delicacies-left-section">
                    <ShopBy />
                    <Best_Seller />
                    
                </div>

                {/* Right Section */}
                <div className="Delicacies-right-section">
                    <Sub_Delicacies />
                    <ItemShow/>
                </div>
                {/* <ItemShow/> */}
            </div>
        </div>
    );
};

export default Delicacies;