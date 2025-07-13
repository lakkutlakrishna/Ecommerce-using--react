import React, { useState } from "react";
import "../../styles/UserDashboard.css";
import Profile from "./Profile";
import Orders from "./Orders";
import Wishlist from "./Wishlist";
import Cart from "./Cart";
import Returns from "./Returns";
import PaymentMethods from "./PaymentMethods";
import AddressBook from "./AddressBook";
import Coupons from "./Coupons";
import Subscription from "./Subscription";
import Reviews from "./Reviews";
import Support from "./Support";
import { Settings } from "lucide-react";
import Notifications from "./Notifications";
import Security from "./Security";
import ProductList from "../ProductList";
import DealsSlider from "../DealsSlider";
import TodayDeals from "../TodayDeals";

const UserDashboard = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const renderSection = () => {
    switch (activeSection) {
      case "profile":
        return <Profile />;
    case "settings":
        return <Settings />
      case "orders":
        return <Orders />;
      case "wishlist":
        return <Wishlist />;
      case "cart":
        return <Cart />;
      case "returns":
        return <Returns />;
      case "payment":
        return <PaymentMethods />;
      case "address":
        return <AddressBook />;
      case "coupons":
        return <Coupons />;
      case "subscription":
        return <Subscription />;
      case "reviews":
        return <Reviews />;
      case "support":
        return <Support />;
      case "notifications":
        return <Notifications />;
      case "security":
        return <Security />;
      default:
        return (
          <div className="dashboard-overview">

            <DealsSlider/>
            <TodayDeals/>
            <ProductList/>
          </div>
        );
    }
  };

  return (
    <div className="user-dashboard">
      {/* Sidebar Navigation */}
      <div className="sidebar">
        {/* <h3>User Dashboard</h3> */}
        <ul>
          <li onClick={() => setActiveSection("overview")}>Overview</li>
          <li onClick={() => setActiveSection("profile")}>Profile & Personal Details</li>
          <li onClick={() => setActiveSection("orders")}>Orders & Purchase History</li>
          <li onClick={() => setActiveSection("wishlist")}>Wishlist & Favorites</li>
          <li onClick={() => setActiveSection("cart")}>Cart & Saved Items</li>
          <li onClick={() => setActiveSection("returns")}>Returns & Refunds</li>
          <li onClick={() => setActiveSection("payment")}>Payment Methods & Wallet</li>
          <li onClick={() => setActiveSection("address")}>Address Book</li>
          <li onClick={() => setActiveSection("coupons")}>Coupons & Discounts</li>
          <li onClick={() => setActiveSection("subscription")}>Subscription & Membership</li>
          <li onClick={() => setActiveSection("reviews")}>Reviews & Ratings</li>
          <li onClick={() => setActiveSection("support")}>Customer Support & Help Center</li>
          <li onClick={() => setActiveSection("notifications")}>Notification Center</li>
          <li onClick={() => setActiveSection("security")}>Security & Privacy Settings</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">{renderSection()}</div>
    </div>
  );
};

export default UserDashboard;