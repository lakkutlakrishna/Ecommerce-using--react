import React from 'react';
import '../styles/Women_web_cameras.css'; // Import the CSS file
import ShopBy from './ShopBy';
import Best_Seller from './Best_Seller';
import Sub_Women_web_cameras from './Sub_Women_web_cameras';
import ItemShow from './ItemShow';

const Women_web_cameras = () => {
    return (
        <div className="Women_web_cameras-container">
            {/* Breadcrumb */}
            <div className="Women_web_cameras-breadcrumb">
                <a href="#" className="Women_web_cameras-breadcrumb-link">Home</a>
                <span className="Women_web_cameras-breadcrumb-separator">&gt;</span>
                <a href="#" className="Women_web_cameras-breadcrumb-link">Account</a>
                <span className="Women_web_cameras-breadcrumb-separator">&gt;</span>
                <span>Women Web Cameras</span>
            </div>

            {/* Main Content */}
            <div className="Women_web_cameras-main-content">
                {/* Left Section */}
                <div className="Women_web_cameras-left-section">
                    <ShopBy />
                    <Best_Seller />
                    
                </div>

                {/* Right Section */}
                <div className="Women_web_cameras-right-section">
                    <Sub_Women_web_cameras />
                    <ItemShow/>
                </div>
                {/* <ItemShow/> */}
            </div>
        </div>
    );
};

export default Women_web_cameras;