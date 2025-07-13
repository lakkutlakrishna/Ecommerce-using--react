import React from "react";
import "../../styles/Returns.css";

const Returns = () => {
  // Sample returns data
  const returns = [
    { id: 1, order: "#12345", reason: "Defective product", status: "Processing" },
    { id: 2, order: "#67890", reason: "Wrong size", status: "Approved" },
  ];

  return (
    <div className="returns">
      <h2>Returns & Refunds</h2>
      <div className="returns-list">
        {returns.length > 0 ? (
          returns.map((ret) => (
            <div key={ret.id} className="return-card">
              <p><strong>Order:</strong> {ret.order}</p>
              <p><strong>Reason:</strong> {ret.reason}</p>
              <p><strong>Status:</strong> {ret.status}</p>
            </div>
          ))
        ) : (
          <p>No return requests found.</p>
        )}
      </div>
      <button>Submit Return Request</button>
    </div>
  );
};

export default Returns;