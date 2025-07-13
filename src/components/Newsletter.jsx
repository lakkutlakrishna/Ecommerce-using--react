import React, { useState } from 'react';
import '../styles/Newsletter.css'; // Import the CSS file
import Account_sidebar from './Account_sidebar';
import { useNavigate } from 'react-router-dom';

const Newsletter = () => {
    const [subscription, setSubscription] = useState(''); // State to manage subscription choice
    const navigate = useNavigate();

    // Handle radio button changes
    const handleSubscriptionChange = (e) => {
        setSubscription(e.target.value);
    };

    // Handle "Back" button click
    const handleBack = () => {
        navigate(-1); // Navigate back to the previous page
    };

    // Handle "Continue" button click
    const handleContinue = () => {
        if (!subscription) {
            alert('Please select a subscription option.');
            return;
        }
        alert(`You have selected: ${subscription}`);
        // Perform further actions here (e.g., API call)
    };

    return (
        <div className="newsletter-container">
            {/* Breadcrumb */}
            <div className="newsletter-breadcrumb">
                <a href="#" className="newsletter-breadcrumb-link">Home</a>
                <span className="newsletter-breadcrumb-separator">&gt;</span>
                <a href="#" className="newsletter-breadcrumb-link">Account</a>
                <span className="newsletter-breadcrumb-separator">&gt;</span>
                <span className="newsletter-breadcrumb-current">Newsletter Subscription</span>
            </div>

            {/* Title */}
            <h1 className="newsletter-title">Newsletter Subscription</h1>

            {/* Main Content */}
            <div className="newsletter-main">
                {/* Newsletter Section */}
                <div className="newsletter-section">
                    <p>Subscribe to our newsletter:</p>
                    <div className="newsletter-radio-group">
                        <label className="newsletter-radio-label">
                            <input
                                type="radio"
                                name="subscription"
                                value="Yes"
                                checked={subscription === 'Yes'}
                                onChange={handleSubscriptionChange}
                            />
                            Yes
                        </label>
                        <label className="newsletter-radio-label">
                            <input
                                type="radio"
                                name="subscription"
                                value="No"
                                checked={subscription === 'No'}
                                onChange={handleSubscriptionChange}
                            />
                            No
                        </label>
                    </div>
                    <div className="newsletter-buttons">
                        <button className="newsletter-back-button" onClick={handleBack}>
                            Back
                        </button>
                        <button className="newsletter-continue-button" onClick={handleContinue}>
                            Continue
                        </button>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="newsletter-sidebar">
                    <Account_sidebar />
                </div>
            </div>
        </div>
    );
};

export default Newsletter;