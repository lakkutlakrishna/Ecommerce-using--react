import React from "react";
import "../styles/Right_Sub_Site_Map.css"; // Import the CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Right_Sub_Site_Map = () => {
  return (
    <div className="right-sub-site-map-container">
      <ul className="right-sub-site-map-list">
        <li className="right-sub-site-map-item font-bold cursor-pointer hover:text-orange-500">
          Special Offers
        </li>
        <li className="right-sub-site-map-item font-bold cursor-pointer hover:text-orange-500">
          My Account
        </li>
        <ul className="right-sub-site-map-sub-list pl-4 space-y-1">
          <li className="right-sub-site-map-sub-item flex items-center cursor-pointer hover:text-orange-500">
            <FontAwesomeIcon icon={faChevronRight} className="text-sm mr-2" />
            <span>Account Information</span>
          </li>
          <li className="right-sub-site-map-sub-item flex items-center cursor-pointer hover:text-orange-500">
            <FontAwesomeIcon icon={faChevronRight} className="text-sm mr-2" />
            <span>Password</span>
          </li>
          <li className="right-sub-site-map-sub-item flex items-center cursor-pointer hover:text-orange-500">
            <FontAwesomeIcon icon={faChevronRight} className="text-sm mr-2" />
            <span>Address Book</span>
          </li>
          <li className="right-sub-site-map-sub-item flex items-center cursor-pointer hover:text-orange-500">
            <FontAwesomeIcon icon={faChevronRight} className="text-sm mr-2" />
            <span>Order History</span>
          </li>
          <li className="right-sub-site-map-sub-item flex items-center cursor-pointer hover:text-orange-500">
            <FontAwesomeIcon icon={faChevronRight} className="text-sm mr-2" />
            <span>Downloads</span>
          </li>
        </ul>
        <li className="right-sub-site-map-item font-bold cursor-pointer hover:text-orange-500">
          Shopping Cart
        </li>
        <li className="right-sub-site-map-item font-bold cursor-pointer hover:text-orange-500">
          Checkout
        </li>
        <li className="right-sub-site-map-item font-bold cursor-pointer hover:text-orange-500">
          Search
        </li>
        <li className="right-sub-site-map-item font-bold cursor-pointer hover:text-orange-500">
          Information
        </li>
        <ul className="right-sub-site-map-sub-list pl-4 space-y-1">
          <li className="right-sub-site-map-sub-item flex items-center cursor-pointer hover:text-orange-500">
            <FontAwesomeIcon icon={faChevronRight} className="text-sm mr-2" />
            <span>About Us</span>
          </li>
          <li className="right-sub-site-map-sub-item flex items-center cursor-pointer hover:text-orange-500">
            <FontAwesomeIcon icon={faChevronRight} className="text-sm mr-2" />
            <span>FAQ</span>
          </li>
          <li className="right-sub-site-map-sub-item flex items-center cursor-pointer hover:text-orange-500">
            <FontAwesomeIcon icon={faChevronRight} className="text-sm mr-2" />
            <span>Services</span>
          </li>
          <li className="right-sub-site-map-sub-item flex items-center cursor-pointer hover:text-orange-500">
            <FontAwesomeIcon icon={faChevronRight} className="text-sm mr-2" />
            <span>Photo Gallery</span>
          </li>
          <li className="right-sub-site-map-sub-item flex items-center cursor-pointer hover:text-orange-500">
            <FontAwesomeIcon icon={faChevronRight} className="text-sm mr-2" />
            <span>Typography</span>
          </li>
          <li className="right-sub-site-map-sub-item flex items-center cursor-pointer hover:text-orange-500">
            <FontAwesomeIcon icon={faChevronRight} className="text-sm mr-2" />
            <span>Support 24/7 page</span>
          </li>
          <li className="right-sub-site-map-sub-item flex items-center cursor-pointer hover:text-orange-500">
            <FontAwesomeIcon icon={faChevronRight} className="text-sm mr-2" />
            <span>Coming Soon</span>
          </li>
          <li className="right-sub-site-map-sub-item flex items-center cursor-pointer hover:text-orange-500">
            <FontAwesomeIcon icon={faChevronRight} className="text-sm mr-2" />
            <span>Contact Us</span>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default Right_Sub_Site_Map;