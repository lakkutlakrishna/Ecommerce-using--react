import React from 'react';
import '../styles/Sushi_Cormer.css'; // Import the CSS file
import ShopBy from './ShopBy';
import Best_Seller from './Best_Seller';
import Sub_Sushi_Cormer from './Sub_Sushi_Cormer';
import ItemShow from './ItemShow';

const Sushi_Cormer = () => {
    return (
        <div className="Sushi_Cormer-container">
            {/* Breadcrumb */}
            <div className="Sushi_Cormer-breadcrumb">
                <a href="#" className="Sushi_Cormer-breadcrumb-link">Home</a>
                <span className="Sushi_Cormer-breadcrumb-separator">&gt;</span>
                <a href="#" className="Sushi_Cormer-breadcrumb-link">Account</a>
                <span className="Sushi_Cormer-breadcrumb-separator">&gt;</span>
                <span>Sushi_Cormer</span>
            </div>

            {/* Main Content */}
            <div className="Sushi_Cormer-main-content">
                {/* Left Section */}
                <div className="Sushi_Cormer-left-section">
                    <ShopBy />
                    <Best_Seller />
                    
                </div>

                {/* Right Section */}
                <div className="Sushi_Cormer-right-section">
                    <Sub_Sushi_Cormer />
                    <ItemShow/>
                </div>
                {/* <ItemShow/> */}
            </div>
        </div>
    );
};

export default Sushi_Cormer;