import React, { useState } from 'react';
import '../styles/LoginPop.css'; // Import the CSS file

const LogPop = ({close}) => {
    const [isVisible, setIsVisible] = useState(true); // State to control visibility

    const closeModal = () => {
        setIsVisible(false); // Hide the modal
    };

    if (!isVisible) return null; // Don't render anything if the modal is closed

    return (
        <div id="logpop-modal" className="logpop-container">
            <div className="logpop-card">
                <div className="logpop-header">
                    <div className="logpop-header-left">
                        <i className="fas fa-user"></i>
                        <span>SIGN IN OR REGISTER</span>
                    </div>
                    <div className="logpop-header-right">
                        <button onClick={closeModal}>
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                </div>
                <div className="logpop-content">
                    <div className="logpop-left-section">
                        <div className="logpop-input-group">
                            <div className="logpop-input-icon">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <input type="email" id="logpop-email" placeholder="E-mail Address" />
                        </div>
                        <div className="logpop-input-group">
                            <div className="logpop-input-icon">
                                <i className="fas fa-lock"></i>
                            </div>
                            <input type="password" id="logpop-password" placeholder="Password" />
                        </div>
                        <div className="logpop-social-login">
                            <p>Login with your social account</p>
                            <div className="logpop-social-buttons">
                                <button className="logpop-social-btn logpop-google">
                                    <i className="fab fa-google"></i>
                                </button>
                                <button className="logpop-social-btn logpop-facebook">
                                    <i className="fab fa-facebook-f"></i>
                                </button>
                                <button className="logpop-social-btn logpop-twitter">
                                    <i className="fab fa-twitter"></i>
                                </button>
                                <button className="logpop-social-btn logpop-linkedin">
                                    <i className="fab fa-linkedin-in"></i>
                                </button>
                            </div>
                        </div>
                        <div className="logpop-forgot-password">
                            <a href="#">Forgot Your Password?</a>
                        </div>
                        <button className="logpop-login-btn">LOGIN</button>
                    </div>
                    <div className="logpop-right-section">
                        <h2>NEW HERE?</h2>
                        <p>Registration is free and easy!</p>
                        <ul>
                            <li><i className="fas fa-check"></i> Faster checkout</li>
                            <li><i className="fas fa-check"></i> Save multiple shipping addresses</li>
                            <li><i className="fas fa-check"></i> View and track orders and more</li>
                        </ul>
                        <button className="logpop-create-account-btn">CREATE AN ACCOUNT</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogPop;