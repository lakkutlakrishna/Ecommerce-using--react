import React from 'react';
import '../styles/Women_windows.css'; // Import the CSS file
import ShopBy from './ShopBy';
import Best_Seller from './Best_Seller';
import Sub_Women_windows from './Sub_Women_windows';
import ItemShow from './ItemShow';

const Women_windows = () => {
    return (
        <div className="Women_windows-container">
            {/* Breadcrumb */}
            <div className="Women_windows-breadcrumb">
                <a href="#" className="Women_windows-breadcrumb-link">Home</a>
                <span className="Women_windows-breadcrumb-separator">&gt;</span>
                <a href="#" className="Women_windows-breadcrumb-link">Account</a>
                <span className="Women_windows-breadcrumb-separator">&gt;</span>
                <span>Windows</span>
            </div>

            {/* Main Content */}
            <div className="Women_windows-main-content">
                {/* Left Section */}
                <div className="Women_windows-left-section">
                    <ShopBy />
                    <Best_Seller />
                    
                </div>

                {/* Right Section */}
                <div className="Women_windows-right-section">
                    <Sub_Women_windows />
                    <ItemShow/>
                </div>
                {/* <ItemShow/> */}
            </div>
        </div>
    );
};

export default Women_windows;