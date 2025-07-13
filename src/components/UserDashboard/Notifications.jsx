import React from "react";
import "../../styles/Notifications.css";

const Notifications = () => {
  // Sample notifications data
  const notifications = [
    { id: 1, message: "Your order #12345 has been shipped.", date: "2023-10-01" },
    { id: 2, message: "Price drop alert on your wishlist item!", date: "2023-09-30" },
    { id: 3, message: "New promotion: Get 20% off on electronics.", date: "2023-09-29" },
  ];

  return (
    <div className="notifications">
      <h2>Notification Center</h2>
      <div className="notification-list">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <div key={notification.id} className="notification-item">
              <p>{notification.message}</p>
              <span className="date">{notification.date}</span>
            </div>
          ))
        ) : (
          <p>No notifications yet.</p>
        )}
      </div>
    </div>
  );
};

export default Notifications;