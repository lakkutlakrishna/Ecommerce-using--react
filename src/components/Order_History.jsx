import React from 'react';
import '../styles/Order_History.css'; // Import the CSS file
import Account_sidebar from './Account_sidebar';

const Order_History = () => {
    return (
        <div className="order-history-container">
            {/* Breadcrumb */}
            <div className="order-history-breadcrumb">
                <a href="#" className="order-history-breadcrumb-link">Home</a>
                <span className="order-history-breadcrumb-separator">&gt;</span>
                <a href="#" className="order-history-breadcrumb-link">Account</a>
                <span className="order-history-breadcrumb-separator">&gt;</span>
                <span>Order History</span>
            </div>

            {/* Main Content and Sidebar */}
            <div className="order-history-content-wrapper">
                {/* Main Content (Order History Section) */}
                <div className="order-history-main">
                    <div className="order-history-content">
                        <h1 className="order-history-title">Order History</h1>
                        <p className="order-history-message">You have not made any previous orders!</p>
                        <div className="order-history-actions">
                            <button className="order-history-continue-button">Continue</button>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="order-history-sidebar">
                    <Account_sidebar />
                </div>
            </div>
        </div>
    );
};

export default Order_History;