import React from "react";
import "../../styles/Orders.css";

const Orders = () => {
  // Sample orders data
  const orders = [
    { id: 1, date: "2023-10-01", items: ["Product A", "Product B"], status: "Shipped", total: 150 },
    { id: 2, date: "2023-09-28", items: ["Product C"], status: "Delivered", total: 75 },
  ];

  return (
    <div className="orders">
      <h2>Orders & Purchase History</h2>
      <div className="order-list">
        {orders.length > 0 ? (
          orders.map((order) => (
            <div key={order.id} className="order-card">
              <div className="order-header">
                <span>Order #{order.id}</span>
                <span className="status">{order.status}</span>
              </div>
              <p><strong>Date:</strong> {order.date}</p>
              <p><strong>Items:</strong> {order.items.join(", ")}</p>
              <p><strong>Total:</strong> ${order.total.toFixed(2)}</p>
              <button>View Details</button>
            </div>
          ))
        ) : (
          <p>No orders found.</p>
        )}
      </div>
    </div>
  );
};

export default Orders;