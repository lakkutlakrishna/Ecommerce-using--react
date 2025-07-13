import React from 'react';
import '../styles/Product_Returns.css'; // Import the CSS file
import Account_sidebar from './Account_sidebar';

const Product_Returns = () => {
    return (
        <div className="Product_Return-container">
            {/* Breadcrumb */}
            <div className="Product_Return-breadcrumb">
                <a href="#" className="Product_Return-breadcrumb-link">Home</a>
                <span className="Product_Return-breadcrumb-separator">&gt;</span>
                <a href="#" className="Product_Return-breadcrumb-link">Account</a>
                <span className="Product_Return-breadcrumb-separator">&gt;</span>
                <span>Product_Return History</span>
            </div>

            {/* Main Content and Sidebar */}
            <div className="Product_Return-content-wrapper">
                {/* Main Content (Order History Section) */}
                <div className="Product_Return-main">
                    <div className="Product_Return-content">
                        <h1 className="Product_Return-title">Product_Return History</h1>
                        <p className="Product_Return-message">You have not made any previous orders Product_Returns!</p>
                        <div className="Product_Return-actions">
                            <button className="Product_Return-continue-button">Continue</button>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="Product_Return-sidebar">
                    <Account_sidebar />
                </div>
            </div>
        </div>
    );
};

export default Product_Returns;