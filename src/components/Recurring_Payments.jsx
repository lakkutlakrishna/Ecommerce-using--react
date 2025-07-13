import React from 'react';
import '../styles/Recurring_Payments.css'; // Import the CSS file
import Account_sidebar from './Account_sidebar';

const Recurring_Payments = () => {
    return (
        <div className="Recurring_Payment-container">
            {/* Breadcrumb */}
            <div className="Recurring_Payment-breadcrumb">
                <a href="#" className="Recurring_Payment-breadcrumb-link">Home</a>
                <span className="Recurring_Payment-breadcrumb-separator">&gt;</span>
                <a href="#" className="Recurring_Payment-breadcrumb-link">Account</a>
                <span className="Recurring_Payment-breadcrumb-separator">&gt;</span>
                <span>Recurring_Payment History</span>
            </div>

            {/* Main Content and Sidebar */}
            <div className="Recurring_Payment-content-wrapper">
                {/* Main Content (Order History Section) */}
                <div className="Recurring_Payment-main">
                    <div className="Recurring_Payment-content">
                        <h1 className="Recurring_Payment-title">Recurring_Payment History</h1>
                        <p className="Recurring_Payment-message">You have not made any previous orders Recurring_Payments!</p>
                        <div className="Recurring_Payment-actions">
                            <button className="Recurring_Payment-continue-button">Continue</button>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="Recurring_Payment-sidebar">
                    <Account_sidebar />
                </div>
            </div>
        </div>
    );
};

export default Recurring_Payments;