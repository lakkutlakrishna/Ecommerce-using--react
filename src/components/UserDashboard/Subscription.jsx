import React from "react";
import "../../styles/Subscription.css";

const Subscription = () => {
  // Sample subscription data
  const subscription = {
    plan: "Premium",
    renewalDate: "2023-11-01",
    status: "Active",
  };

  return (
    <div className="subscription">
      <h2>Subscription & Membership</h2>
      <div className="subscription-details">
        <p><strong>Plan:</strong> {subscription.plan}</p>
        <p><strong>Status:</strong> {subscription.status}</p>
        <p><strong>Renewal Date:</strong> {subscription.renewalDate}</p>
      </div>
      <button>Renew Subscription</button>
      <button>Cancel Subscription</button>
    </div>
  );
};

export default Subscription;