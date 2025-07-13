import React from 'react';
import '../styles/Download.css'; // Import the CSS file
import Account_sidebar from './Account_sidebar';

const Download = () => {
    return (
        <div className="Download-container">
            {/* Breadcrumb */}
            <div className="Download-breadcrumb">
                <a href="#" className="Download-breadcrumb-link">Home</a>
                <span className="Download-breadcrumb-separator">&gt;</span>
                <a href="#" className="Download-breadcrumb-link">Account</a>
                <span className="Download-breadcrumb-separator">&gt;</span>
                <span>Download History</span>
            </div>

            {/* Main Content and Sidebar */}
            <div className="Download-content-wrapper">
                {/* Main Content (Order History Section) */}
                <div className="Download-main">
                    <div className="Download-content">
                        <h1 className="Download-title">Download History</h1>
                        <p className="Download-message">You have not made any previous orders downloads!</p>
                        <div className="Download-actions">
                            <button className="Download-continue-button">Continue</button>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="Download-sidebar">
                    <Account_sidebar />
                </div>
            </div>
        </div>
    );
};

export default Download;