import React from 'react';
import '../styles/Transactions.css'; // Import the CSS file
import Account_sidebar from './Account_sidebar';

const Transactions = () => {
    return (
        <div className="Transaction-container">
            {/* Breadcrumb */}
            <div className="Transaction-breadcrumb">
                <a href="#" className="Transaction-breadcrumb-link">Home</a>
                <span className="Transaction-breadcrumb-separator">&gt;</span>
                <a href="#" className="Transaction-breadcrumb-link">Account</a>
                <span className="Transaction-breadcrumb-separator">&gt;</span>
                <span>Your Transactions</span>
            </div>

            {/* Title */}
            <h1 className="Transaction-title">Your Transactions</h1>
            <p className="Transaction-message">Your current balance is: 0.00€.</p>

            {/* Main Content and Sidebar */}
            <div className="Transaction-content-wrapper">
                {/* Main Content (Reward Points Table) */}
                <div className="Transaction-main">
                    <div className="Transaction-table-section">
                        <table className="Transaction-table">
                            <thead>
                                <tr>
                                    <th className="Transaction-table-header">Date Added</th>
                                    <th className="Transaction-table-header">Description</th>
                                    <th className="Transaction-table-header">Amount (USD)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan="3" className="Transaction-table-empty-message">
                                    You do not have any transactions!
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="Transaction-table-footer">
                            <span className="Transaction-table-pagination">
                                Showing 0 to 0 of 0 (0 Pages)
                            </span>
                            <button className="Transaction-continue-button">Continue</button>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="Transaction-sidebar">
                    <Account_sidebar />
                </div>
            </div>
        </div>
    );
};

export default Transactions;