import React from 'react';
import '../styles/Logout.css'; // Import the CSS file
import Account_sidebar from './Account_sidebar';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    const handleContinue = () => {
        
        navigate('/');
    };

    return (
        <div className="logout-container">
            {/* Breadcrumb */}
            <div className="logout-breadcrumb">
                <a className="logout-breadcrumb-link" href="#">
                    Account
                </a>
                <span className="logout-breadcrumb-separator">&gt;</span>
                <span>Logout</span>
            </div>

            {/* Title */}
            <h1 className="logout-title">Logout</h1>

            {/* Main Content and Sidebar */}
            <div className="logout-content-wrapper">
                {/* Main Content (Table Section) */}
                <div className="logout-table-section">
                    <p>
                        You have been logged off your account. It is now safe to leave the computer.
                        <br />
                        Your shopping cart has been saved, the items inside it will be restored whenever you log back into your account.
                    </p>
                    <button className="logout-continue-button" onClick={handleContinue}>
                        CONTINUE
                    </button>
                </div>

                {/* Sidebar */}
                <div className="logout-sidebar">
                    <Account_sidebar />
                </div>
            </div>
        </div>
    );
};

export default Logout;