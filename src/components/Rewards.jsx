import React from 'react';
import '../styles/Rewards.css'; // Import the CSS file

const Rewards = () => {
  return (
    <div className="rewards-container">
      <div className="rewards-content">
        <div className="reward-item">
          <i className="fas fa-truck"></i>
          <div>
            <div className="reward-title">FREE DELIVERY</div>
            <div className="reward-subtitle">From 275 AED</div>
          </div>
        </div>
        <div className="reward-divider"></div>
        <div className="reward-item">
          <i className="fas fa-money-bill-alt"></i>
          <div>
            <div className="reward-title">CASH ON DELIVERY</div>
            <div className="reward-subtitle">From 275 AED</div>
          </div>
        </div>
        <div className="reward-divider"></div>
        <div className="reward-item">
          <i className="fas fa-gift"></i>
          <div>
            <div className="reward-title">FREE GIFT BOX</div>
            <div className="reward-subtitle">& Gift Note</div>
          </div>
        </div>
        <div className="reward-divider"></div>
        <div className="reward-item">
          <i className="fas fa-phone-alt"></i>
          <div>
            <div className="reward-title">CONTACT US</div>
            <div className="reward-subtitle">123 456 789</div>
          </div>
        </div>
        <div className="reward-divider"></div>
        <div className="reward-item">
          <i className="fas fa-gem"></i>
          <div>
            <div className="reward-title">LOYALTY</div>
            <div className="reward-subtitle">Rewarded</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
