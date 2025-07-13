import React, { useState } from "react";
import "../../styles/Wishlist.css";

const Wishlist = () => {
  // Sample wishlist data
  const [wishlist, setWishlist] = useState([
    { id: 1, name: "Product A", price: 50 },
    { id: 2, name: "Product B", price: 30 },
    { id: 3, name: "Product C", price: 20 },
    { id: 4, name: "Product D", price: 30 },
  ]);

  // Remove item from wishlist
  const removeItem = (id) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
  };

  return (
    <div className="wishlist">
      <h2>Wishlist & Favorites</h2>
      <div className="wishlist-items">
        {wishlist.length > 0 ? (
          wishlist.map((item) => (
            <div key={item.id} className="wishlist-item">
              <p><strong>{item.name}</strong></p>
              <p>${item.price.toFixed(2)}</p>
              <button onClick={() => removeItem(item.id)}>Remove</button>
              <button>Add to Cart</button>
            </div>
          ))
        ) : (
          <p>Your wishlist is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Wishlist;