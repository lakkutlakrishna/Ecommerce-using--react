import React from "react";
import "../styles/ForgotPasswordPop.css";
import AccountSection from "./AccountSection";
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <div className="forgot-password-container">
      <div className="forgot-password-box">
        <div className="forgot-password-breadcrumb">
          <a href="#" className="forgot-password-home-link">🏠</a> 
          <span> &gt; </span> 
          <a href="#" className="forgot-password-account-link">Account</a> 
          <span> &gt; </span> 
          <span className="forgot-password-current-page">Forgotten Password</span>
        </div>

        <h1 className="forgot-password-title">Forgot Your Password?</h1>
        <p className="forgot-password-text">
          Enter the e-mail address associated with your account. Click submit to have a password reset link e-mailed to you.
        </p>

        <form>
          <div className="forgot-password-input-group">
            <label htmlFor="email" className="forgot-password-label">Your E-Mail Address</label>
            <input type="email" id="email" placeholder="E-Mail Address" className="forgot-password-input" />
          </div>
          <div className="forgot-password-buttons">
            <button type="button" className="forgot-password-back-btn">Back</button>
            <button type="submit" className="forgot-password-continue-btn">Continue</button>
          </div>
        </form>
      </div>

      <AccountSection/>
    </div>
  );
};

export default ForgotPassword;
