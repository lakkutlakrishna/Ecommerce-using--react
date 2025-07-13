import React, { useState } from "react";
import "../../styles/Coupons.css";

const Coupons = () => {
  // Sample coupon data
  const [coupons, setCoupons] = useState([
    { code: "SAVE10", discount: 10, used: false },
    { code: "FREESHIP", discount: 0, freeShipping: true, used: false },
  ]);

  // Loyalty points
  const [loyaltyPoints, setLoyaltyPoints] = useState(150);

  // Apply coupon
  const applyCoupon = (code) => {
    const updatedCoupons = coupons.map((coupon) =>
      coupon.code === code ? { ...coupon, used: true } : coupon
    );
    setCoupons(updatedCoupons);
    alert(`Coupon ${code} applied!`);
  };

  return (
    <div className="coupons">
      <h2>Coupons & Discounts</h2>

      {/* Available Coupons */}
      <div className="available-coupons">
        <h3>Available Coupons</h3>
        {coupons.length > 0 ? (
          coupons.map((coupon) => (
            <div key={coupon.code} className="coupon-card">
              <div className="coupon-details">
                <p><strong>{coupon.code}</strong></p>
                <p>{coupon.freeShipping ? "Free Shipping" : `-${coupon.discount}% Off`}</p>
              </div>
              <button
                onClick={() => applyCoupon(coupon.code)}
                disabled={coupon.used}
              >
                {coupon.used ? "Applied" : "Apply"}
              </button>
            </div>
          ))
        ) : (
          <p>No coupons available.</p>
        )}
      </div>

      {/* Loyalty Points */}
      <div className="loyalty-points">
        <h3>Loyalty Points</h3>
        <p>You have <strong>{loyaltyPoints} points</strong>.</p>
        <button>Redeem Points</button>
      </div>
    </div>
  );
};

export default Coupons;