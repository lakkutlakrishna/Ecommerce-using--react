import React from 'react';
import '../styles/speaker_alarms.css'; // Import the CSS file
import ShopBy from './ShopBy';
import Best_Seller from './Best_Seller';
import Sub_speaker_alarms from './Sub_speaker_alarms';
import ItemShow from './ItemShow';

const Speaker_alarms = () => {
    return (
        <div className="speaker_alarms-container">
            {/* Breadcrumb */}
            <div className="speaker_alarms-breadcrumb">
                <a href="#" className="speaker_alarms-breadcrumb-link">Home</a>
                <span className="speaker_alarms-breadcrumb-separator">&gt;</span>
                <a href="#" className="speaker_alarms-breadcrumb-link">Account</a>
                <span className="speaker_alarms-breadcrumb-separator">&gt;</span>
                <span>speaker_alarms Electronics</span>
            </div>

            {/* Main Content */}
            <div className="speaker_alarms-main-content">
                {/* Left Section */}
                <div className="speaker_alarms-left-section">
                    <ShopBy />
                    <Best_Seller />
                    
                </div>

                {/* Right Section */}
                <div className="speaker_alarms-right-section">
                    <Sub_speaker_alarms />
                    <ItemShow/>
                </div>
                {/* <ItemShow/> */}
            </div>
        </div>
    );
};

export default Speaker_alarms;