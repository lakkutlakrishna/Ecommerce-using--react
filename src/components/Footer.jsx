import React from "react";
import "../styles/Footer.css";
import Rewards from "./Rewards";
import Info from"./Info";

const Footer = () => {
  return (
    <footer className="footer">
      <Rewards/>
      <Info/>
      <p className="footer-text">
        SO Revo © 2015 - 2025. All Rights Reserved. Designed by
        <a href="#" className="footer-link">
          OpenCartWorks.Com
        </a>
      </p>
      <div className="payment-logos">
        <img
          src="https://storage.googleapis.com/a1aa/image/hz0m1symPAblXruFRMSA5MHflfQ5X5eDvSxnw0vuUHc.jpg"
          alt="Visa logo"
          className="logo"
        />
        <img
          src="https://storage.googleapis.com/a1aa/image/-XjOBE9aFnM7c5YAhYqtqIFdHB8LYdglgxyt8OP61lg.jpg"
          alt="MasterCard logo"
          className="logo"
        />
        <img
          src="https://storage.googleapis.com/a1aa/image/mqnPt7M0yni3jxLTLFn7pUj5KEaQjThSmFEOvvte6W4.jpg"
          alt="PayPal logo"
          className="logo"
        />
        <img
          src="https://storage.googleapis.com/a1aa/image/PfqMSUbTHj4PcuxAqU_CZS_B8Hnf1z4kKxaG3nRa7WM.jpg"
          alt="American Express logo"
          className="logo"
        />
        <img
          src="https://storage.googleapis.com/a1aa/image/XcFzFze0ieyQmSbca5RkJMha8qBfwvNEGcPXODffnTY.jpg"
          alt="Visa Electron logo"
          className="logo"
        />
        <img
          src="https://storage.googleapis.com/a1aa/image/qyBB4xTuwG1qKwOx0FmR76pWmKCqN13dBpqPLRZAf1c.jpg"
          alt="Laser logo"
          className="logo"
        />
        <img
          src="https://storage.googleapis.com/a1aa/image/pss_DM1Zypuy9ceBKRJ9KXsigXA54keLZZtHydeoayg.jpg"
          alt="Maestro logo"
          className="logo"
        />
        <img
          src="https://storage.googleapis.com/a1aa/image/Jn0CXI8evTQZ9QqzzMwdqDJ928PGtSjRLezFeOizAA8.jpg"
          alt="Delta logo"
          className="logo"
        />
        <img
          src="https://storage.googleapis.com/a1aa/image/fxXaWnE5mNDpaRkNuKZB4MpbV8QadJCZMNMjW8dyWLc.jpg"
          alt="Solo logo"
          className="logo"
        />
      </div>
    </footer>
  );
};

export default Footer;