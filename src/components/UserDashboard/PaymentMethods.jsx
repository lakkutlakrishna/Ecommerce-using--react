import React, { useState } from "react";
import "../../styles/PaymentMethods.css";

const PaymentMethods = () => {
  // Sample payment methods data
  const [paymentMethods, setPaymentMethods] = useState([
    { id: 1, type: "Credit Card", last4Digits: "1234" },
    { id: 2, type: "PayPal", email: "user@example.com" },
  ]);

  // Add a new payment method (placeholder logic)
  const addPaymentMethod = () => {
    alert("Add a new payment method (e.g., via form).");
  };

  // Delete a payment method
  const deletePaymentMethod = (id) => {
    const updatedMethods = paymentMethods.filter((method) => method.id !== id);
    setPaymentMethods(updatedMethods);
  };

  return (
    <div className="payment-methods">
      <h2>Payment Methods & Wallet</h2>
      <div className="methods-list">
        {paymentMethods.length > 0 ? (
          paymentMethods.map((method) => (
            <div key={method.id} className="method-card">
              <p>
                {method.type}:{" "}
                {method.last4Digits ? `**** **** **** ${method.last4Digits}` : method.email}
              </p>
              <button onClick={() => deletePaymentMethod(method.id)}>Delete</button>
            </div>
          ))
        ) : (
          <p>No payment methods saved.</p>
        )}
      </div>
      <button className="add-method" onClick={addPaymentMethod}>
        Add Payment Method
      </button>
    </div>
  );
};

export default PaymentMethods;