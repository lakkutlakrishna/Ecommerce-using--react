// import React, { createContext, useState } from "react";

// // Create a Cart Context
// export const CartContext = createContext();

// // Create a Cart Provider to wrap the app
// export const CartProvider = ({ children }) => {
//   const [cartCount, setCartCount] = useState(0);
//   const [isCartPopupVisible, setIsCartPopupVisible] = useState(false);
//   const [lastAddedItem, setLastAddedItem] = useState(null); // Store the last added item

//   // Function to add an item to the cart
//   const addToCart = (item) => {
//     setCartCount((prevCount) => prevCount + 1);
//     setLastAddedItem(item); // Store the details of the added item
//     setIsCartPopupVisible(true); // Show the popup
//   };

//   // Function to hide the popup
//   const hideCartPopup = () => {
//     setIsCartPopupVisible(false);
//   };

//   return (
//     <CartContext.Provider
//       value={{ cartCount, addToCart, isCartPopupVisible, hideCartPopup, lastAddedItem }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };



import React, { createContext, useState } from "react";

// Create a Cart Context
export const CartContext = createContext();

// Create a Cart Provider to wrap the app
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartPopupVisible, setIsCartPopupVisible] = useState(false);
  const [lastAddedItem, setLastAddedItem] = useState(null); // Store the last added item

  // Function to calculate cart count dynamically
  const cartCount = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      // Check if the item already exists in the cart
      const existingItem = prevItems.find((cartItem) => cartItem.name === item.name);
      if (existingItem) {
        // If it exists, increase the quantity
        return prevItems.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 }
            : cartItem
        );
      }
      // If it doesn't exist, add it with a quantity of 1
      return [...prevItems, { ...item, quantity: 1 }];
    });

    setLastAddedItem(item); // Store the details of the added item
    setIsCartPopupVisible(true); // Show the popup
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemName) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.name !== itemName)
    );
  };

  // Function to hide the popup
  const hideCartPopup = () => {
    setIsCartPopupVisible(false);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount, // Include cartCount in the context value
        addToCart,
        removeFromCart,
        isCartPopupVisible,
        hideCartPopup,
        lastAddedItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};