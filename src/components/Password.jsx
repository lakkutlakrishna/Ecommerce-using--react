import React from 'react';
import '../styles/Password.css'; // Import the CSS file
import Account_sidebar from './Account_sidebar';

const Password = () => {
    return (
        <div className="password-container">
            {/* Breadcrumb */}
            <div className="password-breadcrumb">
                <i className="fas fa-home"></i>
                <span>ACCOUNT</span>
                <i className="fas fa-chevron-right"></i>
                <span>CHANGE PASSWORD</span>
            </div>

            {/* Main Content Wrapper */}
            <div className="password-content-wrapper">
                {/* Main Content */}
                <div className="password-main-content">
                    <h1>Change Password</h1>
                    <h2>Your Password</h2>
                    <form>
                        <div className="password-form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Password"
                            />
                        </div>
                        <div className="password-form-group">
                            <label htmlFor="password-confirm">Password Confirm</label>
                            <input
                                type="password"
                                id="password-confirm"
                                placeholder="Password Confirm"
                            />
                        </div>
                        <div className="password-form-actions">
                            <button className="password-btn-back">Back</button>
                            <button className="password-btn-continue">CONTINUE</button>
                        </div>
                    </form>
                </div>

                {/* Sidebar */}
                <div className="password-sidebar">
                    <Account_sidebar />
                </div>
            </div>
        </div>
    );
};

export default Password;