import React from 'react';
import '../styles/speaker_qunge_genga.css'; // Import the CSS file
import ShopBy from './ShopBy';
import Best_Seller from './Best_Seller';
import Sub_speaker_qunge_genga from './Sub_speaker_qunge_genga';
import ItemShow from './ItemShow';

const Speaker_qunge_genga = () => {
    return (
        <div className="speaker_qunge_genga-container">
            {/* Breadcrumb */}
            <div className="speaker_qunge_genga-breadcrumb">
                <a href="#" className="speaker_qunge_genga-breadcrumb-link">Home</a>
                <span className="speaker_qunge_genga-breadcrumb-separator">&gt;</span>
                <a href="#" className="speaker_qunge_genga-breadcrumb-link">Account</a>
                <span className="speaker_qunge_genga-breadcrumb-separator">&gt;</span>
                <span>Women</span>
            </div>

            {/* Main Content */}
            <div className="speaker_qunge_genga-main-content">
                {/* Left Section */}
                <div className="speaker_qunge_genga-left-section">
                    <ShopBy />
                    <Best_Seller />
                    
                </div>

                {/* Right Section */}
                <div className="speaker_qunge_genga-right-section">
                    <Sub_speaker_qunge_genga />
                    <ItemShow/>
                </div>
                {/* <ItemShow/> */}
            </div>
        </div>
    );
};

export default Speaker_qunge_genga;