import React, { useState, useEffect } from 'react';
import "../styles/Signup.css";
import LogPop from '../components/LoginPop.jsx'; // Import the LogPop component
import ForgotPasswordPop from './ForgotPasswordPop.jsx'; // Import the ForgotPasswordPop component
import Account from '../components/Account.jsx';

const AccountSection = () => {
    const [isLogPopVisible, setIsLogPopVisible] = useState(false);
    const [isPasswordPopVisible, setIsPasswordPopVisible] = useState(false);

    // Toggle body scroll when modal is open/closed
    useEffect(() => {
        if (isLogPopVisible || isPasswordPopVisible) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }
    }, [isLogPopVisible, isPasswordPopVisible]);

    const handleLoginClick = () => {
        setIsLogPopVisible(true);
    };

    const handleCloseLogPop = () => {
        setIsLogPopVisible(false);
    };

    const handleForgotPasswordClick = () => {
        setIsPasswordPopVisible(true);
    };

    const handleClosePasswordPop = () => {
        setIsPasswordPopVisible(false);
    };

    return (
        <div className="account-section">
            <h2 className="account-title">ACCOUNT</h2>
            <ul className="account-list">
                <li>
                    <a href="#" className="account-link" onClick={handleLoginClick}>
                        Login / Register
                    </a>
                </li>
                <hr />
                <li>
                    <a href="/ForgotPassword" className="account-link" 
                    // onClick={handleForgotPasswordClick}
                    >
                        Forgotten Password
                    </a>
                </li>
                <hr />
                <li><a href="/Account" className="account-link">My Account</a></li>
                <hr />
                <li><a href="#" className="account-link">Address Book</a></li>
                <hr />
                <li><a href="#" className="account-link">Wish List</a></li>
                <hr />
                <li><a href="#" className="account-link">Order History</a></li>
                <hr />
                <li><a href="#" className="account-link">Downloads</a></li>
                <hr />
                <li><a href="#" className="account-link">Recurring payments</a></li>
                <hr />
                <li><a href="#" className="account-link">Reward Points</a></li>
                <hr />
                <li><a href="#" className="account-link">Returns</a></li>
                <hr />
                <li><a href="#" className="account-link">Transactions</a></li>
                <hr />
                <li><a href="#" className="account-link">Newsletter</a></li>
                <hr />
            </ul>

            {/* Render LogPop as a modal */}
            {isLogPopVisible && (
                <div className="modal-overlay">
                    <LogPop onClose={handleCloseLogPop} />
                </div>
            )}

            {/* Render ForgotPasswordPop as a modal */}
            {isPasswordPopVisible && (
                <div className="modal-overlay">
                    <ForgotPasswordPop onClose={handleClosePasswordPop} />
                </div>
            )}
        </div>
    );
};

export default AccountSection;