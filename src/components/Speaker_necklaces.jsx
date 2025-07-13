import React from 'react';
import '../styles/speaker_necklaces.css'; // Import the CSS file
import ShopBy from './ShopBy';
import Best_Seller from './Best_Seller';
import Sub_speaker_necklaces from './Sub_speaker_necklaces';
import ItemShow from './ItemShow';

const Speaker_Necklaces = () => {
    return (
        <div className="speaker_necklaces-container">
            {/* Breadcrumb */}
            <div className="speaker_necklaces-breadcrumb">
                <a href="#" className="speaker_necklaces-breadcrumb-link">Home</a>
                <span className="speaker_necklaces-breadcrumb-separator">&gt;</span>
                <a href="#" className="speaker_necklaces-breadcrumb-link">Account</a>
                <span className="speaker_necklaces-breadcrumb-separator">&gt;</span>
                <span>speaker_necklaces Electronics</span>
            </div>

            {/* Main Content */}
            <div className="speaker_necklaces-main-content">
                {/* Left Section */}
                <div className="speaker_necklaces-left-section">
                    <ShopBy />
                    <Best_Seller />
                    
                </div>

                {/* Right Section */}
                <div className="speaker_necklaces-right-section">
                    <Sub_speaker_necklaces />
                    <ItemShow/>
                </div>
                {/* <ItemShow/> */}
            </div>
        </div>
    );
};

export default Speaker_Necklaces;