import React from 'react';
import '../styles/Account.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCircle } from '@fortawesome/free-solid-svg-icons';
import Account_sidebar from './Account_sidebar';

const Account = () => {
    const navigate = useNavigate();
    const handleEdit = () => {
        navigate('/Edit');
    };
    const handlePassword = () => {
        navigate('/Password');
    };
    const handleAddress = () => {
        navigate('/Address');
    };

    return (
        <div className="account-container">
            <div className="breadcrumb">
                <FontAwesomeIcon icon={faHome} className="breadcrumb-icon" />&gt;&nbsp;
                <span>ACCOUNT</span>
            </div>
            <div className="account-content">
                <div className="account-main">
                    <div className="account-section">
                        <h2>My Account</h2>
                        <ul>
                            <li onClick={handleEdit}>Edit your account information</li>
                            <li onClick={handlePassword}>Change your password</li>
                            <li onClick={handleAddress}>Modify your address book entries</li>
                            <li>Modify your wish list</li>
                        </ul>
                        <h2>My Orders</h2>
                        <ul>
                            <li>View your order history</li>
                            <li>Downloads</li>
                            <li>Your Reward Points</li>
                            <li>View your return requests</li>
                            <li>Your Transactions</li>
                            <li>Recurring payments</li>
                        </ul>
                        <h2>My Affiliate-Account</h2>
                        <ul>
                            <li>Register for an affiliate account</li>
                        </ul>
                        <h2>Newsletter</h2>
                        <ul>
                            <li>Subscribe / unsubscribe to newsletter</li>
                        </ul>
                    </div>
                </div><div className='acc'>
                <Account_sidebar /></div>
            </div>
        </div>
    );
};

export default Account;