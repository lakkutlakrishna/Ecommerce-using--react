import React from 'react';
import '../styles/speaker.css'; // Import the CSS file
import ShopBy from './ShopBy';
import Best_Seller from './Best_Seller';
import Sub_speaker_Electronics from './Sub_speaker_Electronics';
import ItemShow from './ItemShow';

const Speaker = () => {
    return (
        <div className="speaker-container">
            {/* Breadcrumb */}
            <div className="speaker-breadcrumb">
                <a href="#" className="speaker-breadcrumb-link">Home</a>
                <span className="speaker-breadcrumb-separator">&gt;</span>
                <a href="#" className="speaker-breadcrumb-link">Account</a>
                <span className="speaker-breadcrumb-separator">&gt;</span>
                <span>Speaker Electronics</span>
            </div>

            {/* Main Content */}
            <div className="speaker-main-content">
                {/* Left Section */}
                <div className="speaker-left-section">
                    <ShopBy />
                    <Best_Seller />
                    
                </div>

                {/* Right Section */}
                <div className="speaker-right-section">
                    <Sub_speaker_Electronics />
                    <ItemShow/>
                </div>
                {/* <ItemShow/> */}
            </div>
        </div>
    );
};

export default Speaker;