import React, { useState, useEffect } from "react";
import { Lock } from "lucide-react";
import "../styles/Upperbar.css";
import "../styles/Navbar.css";
import Loader from "./Loader.jsx";

const Upperbar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const [activeDropdown, setActiveDropdown] = useState(null); // Tracks the currently open dropdown

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
      setActiveDropdown(null); // Close dropdowns when resizing
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = (menu) => {
    setActiveDropdown((prev) => (prev === menu ? null : menu)); // Close others when opening a new one
  };

  return (
    <div className="upperbar">
      {!isSmallScreen && (
        <div className="upperbar-left">
          <span>Free 3-day delivery and free returns within the US</span>
          <a href="/signup" onClick={() => <Loader />} className="register">
            Register
          </a>{" "}
          or
          <a href="/signin" className="login"> Login</a>
        </div>
      )}

      <div className={`upperbar-right ${isSmallScreen ? "small-screen" : ""}`}>
        <a href="/signin" className="icon-link">
          <Lock size={16} /> Login
        </a>

        {/* Account Dropdown */}
        <div
          className={`nav-link shop-link ${activeDropdown === "account" ? "active" : ""}`}
          onClick={() => toggleDropdown("account")}
          onMouseEnter={!isSmallScreen ? () => toggleDropdown("account") : null}
          onMouseLeave={!isSmallScreen ? () => toggleDropdown(null) : null}
        >
          Account ▼
          {activeDropdown === "account" && (
            <div className="dropdown-menu">
              <a href="/account" className="dropdown-item">My Account</a>
              <a href="/orderhistory" className="dropdown-item">Order History</a>
              <a href="/transactions" className="dropdown-item">Transactions</a>
              <a href="/downloads" className="dropdown-item">Downloads</a>
              <a href="/checkout" className="dropdown-item">Checkout</a>
            </div>
          )}
        </div>

        {/* Language Dropdown */}
        <div
          className={`nav-link shop-link ${activeDropdown === "language" ? "active" : ""}`}
          onClick={() => toggleDropdown("language")}
          onMouseEnter={!isSmallScreen ? () => toggleDropdown("language") : null}
          onMouseLeave={!isSmallScreen ? () => toggleDropdown(null) : null}
        >
          <img src="https://flagcdn.com/w40/gb.png" alt="English" className="flag-icon" /> English
          {activeDropdown === "language" && (
            <div className="dropdown-menu">
              <a href="/en" className="dropdown-item">English</a>
              <a href="/fr" className="dropdown-item">Français</a>
              <a href="/es" className="dropdown-item">Español</a>
              <a href="/it" className="dropdown-item">Italiano</a>
              <a href="/de" className="dropdown-item">Deutsch</a>
              <a href="/ru" className="dropdown-item">Русский</a>
              <a href="/pt" className="dropdown-item">Português</a>
              <a href="/cn" className="dropdown-item">中文</a>
            </div>
          )}
        </div>

        {/* Currency Dropdown */}
        <div
          className={`nav-link shop-link ${activeDropdown === "currency" ? "active" : ""}`}
          onClick={() => toggleDropdown("currency")}
          onMouseEnter={!isSmallScreen ? () => toggleDropdown("currency") : null}
          onMouseLeave={!isSmallScreen ? () => toggleDropdown(null) : null}
        >
          $ US Dollar
          {activeDropdown === "currency" && (
            <div className="dropdown-menu">
              <a href="#" className="dropdown-item">€ Euro</a>
              <a href="#" className="dropdown-item">£ Pound Sterling</a>
              <a href="#" className="dropdown-item">$ US Dollar</a>
              <a href="#" className="dropdown-item">¥ Japanese Yen</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Upperbar;