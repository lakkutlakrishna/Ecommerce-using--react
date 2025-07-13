import React from 'react';
import '../styles/Reward_points.css'; // Import the CSS file
import Account_sidebar from './Account_sidebar';

const Reward_points = () => {
    return (
        <div className="reward-points-container">
            {/* Breadcrumb */}
            <div className="reward-points-breadcrumb">
                <a href="#" className="reward-points-breadcrumb-link">Home</a>
                <span className="reward-points-breadcrumb-separator">&gt;</span>
                <a href="#" className="reward-points-breadcrumb-link">Account</a>
                <span className="reward-points-breadcrumb-separator">&gt;</span>
                <span>Reward Points</span>
            </div>

            {/* Title */}
            <h1 className="reward-points-title">Your Reward Points</h1>
            <p className="reward-points-message">Your total number of reward points is: 0.</p>

            {/* Main Content and Sidebar */}
            <div className="reward-points-content-wrapper">
                {/* Main Content (Reward Points Table) */}
                <div className="reward-points-main">
                    <div className="reward-points-table-section">
                        <table className="reward-points-table">
                            <thead>
                                <tr>
                                    <th className="reward-points-table-header">Date Added</th>
                                    <th className="reward-points-table-header">Description</th>
                                    <th className="reward-points-table-header">Points</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan="3" className="reward-points-table-empty-message">
                                        You do not have any reward points!
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="reward-points-table-footer">
                            <span className="reward-points-table-pagination">
                                Showing 0 to 0 of 0 (0 Pages)
                            </span>
                            <button className="reward-points-continue-button">Continue</button>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="reward-points-sidebar">
                    <Account_sidebar />
                </div>
            </div>
        </div>
    );
};

export default Reward_points;