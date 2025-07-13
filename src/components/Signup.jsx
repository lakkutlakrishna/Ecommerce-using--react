import React from 'react';
import '../styles/Signup.css'; // Import the CSS file
import AccountSection from './AccountSection'; // Import the AccountSection component

const Signup = () => {
    return (
        <div className="container">
            <div className="flex-container">
                <div className="form-container">
                    <div className="breadcrumb">
                        <a href="#" className="breadcrumb-link">Home</a> &gt; 
                        <a href="#" className="breadcrumb-link">Account</a> &gt; 
                        <span className="breadcrumb-current">Register</span>
                    </div>
                    <h1 className="form-title">Register Account</h1>
                    <p className="form-subtitle">
                        If you already have an account with us, please login at the login page.
                    </p>

                    <h2 className="section-title">Your Personal Details</h2>
                    <hr className="section-divider" />
                    <form>
                        <div className="form-group">
                            <label className="form-label">First Name</label>
                            <input type="text" className="form-input" placeholder="First Name" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Last Name</label>
                            <input type="text" className="form-input" placeholder="Last Name" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">E-Mail</label>
                            <input type="email" className="form-input" placeholder="E-Mail" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Telephone</label>
                            <input type="text" className="form-input" placeholder="Telephone" />
                        </div>

                        <h2 className="section-title">Your Password</h2>
                        <hr className="section-divider" />
                        <div className="form-group">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-input" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Password Confirm</label>
                            <input type="password" className="form-input" placeholder="Password Confirm" />
                        </div>

                        <h2 className="section-title">Newsletter</h2>
                        <hr className="section-divider" />
                        <div className="form-group">
                            <label className="form-label">Subscribe</label>
                            <div className="radio-group">
                                <input type="radio" name="subscribe" className="radio-input" checked />
                                <label className="radio-label">Yes</label>
                                <input type="radio" name="subscribe" className="radio-input" />
                                <label className="radio-label">No</label>
                            </div>
                        </div>

                        <div className="form-group agreement">
                            <label className="checkbox-label">
                                <input type="checkbox" className="checkbox-input" />
                                <span className="checkbox-text">
                                    I have read and agree to the <a href="#" className="link">Support 24/7 page</a>
                                </span>
                            </label>
                        </div>

                        <button type="submit" className="submit-button">CONTINUE</button>
                    </form>
                </div>

                {/* Use the AccountSection component here */}
                <AccountSection />
            </div>
        </div>
    );
};

export default Signup;