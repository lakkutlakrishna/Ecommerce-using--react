import React, { useState } from "react";
import "../styles/CategoriesSlide.css"; // Import the CSS file

const CategorySlide = ({ onClose }) => {
  const [expandedCategories, setExpandedCategories] = useState({});
  const [isOpen, setIsOpen] = useState(true);
  // Toggle subcategory visibility
  const toggleCategory = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category], // Toggle the expanded state for the clicked category
    }));
  };
  const handleClose = () => {
    setIsOpen(false); // Set isOpen to false to hide the slide
  };
  // Categories data structure
  const categories = [
    { label: "All Categories", value: "category" },
    { label: "Accessories", value: "Accessories" },
    {
      label: "Children",
      children: [
        { label: "Boys News", value: "BoysNews" },
        { label: "Girls News", value: "GirlsNews" },
      ],
    },
    { label: "Cosmetic", value: "Cosmetic" },
    { label: "Glasses", value: "Glasses" },
    {
      label: "Jewelry",
      children: [
        { label: "Bracelet", value: "Bracelet" },
        { label: "Earrings", value: "Earrings" },
        { label: "Necklaces", value: "Necklaces" },
        { label: "Ring", value: "Ring" },
      ],
    },
    { label: "Kitchen", value: "Kitchen" },
    { label: "Laptop & Notebook", value: "Laptop & Notebook" },
    { label: "Living Room", value: "Living Room" },
    {
      label: "Sports",
      children: [
        { label: "Accessories", value: "Accessories" },
        { label: "Camping & Hiking", value: "Camping&Hiking" },
        { label: "Cusen mariot", value: "Cusen mariot" },
        { label: "Electroins", value: "Electroins" },
        { label: "Engnite nanet", value: "Engnite nanet" },
        { label: "Fashion", value: "Fashion" },
        {
          label: "Men",
          children: [
            { label: "Cusen mariot", value: "Cusen mariot" },
            { label: "Cusen mariot", value: "Cusen mariot" },
            { label: "Denta magela", value: "Denta magela" },
          ],
        },
        { label: "Mobiles", value: "Mobiles" },
        { label: "Theid cupensg", value: "Theid cupensg" },
        { label: "Verture agoent", value: "Verture agoent" },
        {
          label: "Women",
          children: [{ label: "Computer", value: "Computer" }],
        },
      ],
    },
    { label: "Summer Fashion", value: "Summer Fashion" },
    {
      label: "Laptops & Notebooks",
      children: [
        { label: "Macs", value: "Macs" },
        { label: "Windows", value: "Windows" },
      ],
    },
    {
      label: "Womens",
      children: [
        { label: "Dress", value: "Dress" },
        { label: "Necklaces", value: "Necklaces" },
        { label: "Pearl men", value: "Pearl men" },
        { label: "Shirt", value: "Shirt" },
      ],
    },
    {
      label: "Fashion1",
      children: [
        { label: "Accessories", value: "Accessories" },
        { label: "Alarms", value: "Alarms" },
        { label: "Gadgets", value: "Gadgets" },
        { label: "Printers", value: "Printers" },
        { label: "Scanners", value: "Scanners" },
        { label: "Speakers", value: "Speakers" },
        { label: "Web Cameras", value: "Web Cameras" },
      ],
    },
    {
      label: "Shop Collections",
      children: [
        { label: "Hanet magente", value: "Hanet magente" },
        { label: "Knage unget", value: "Knage unget" },
        { label: "Latenge mange", value: "Latenge mange" },
        { label: "Punge nenune", value: "Punge nenune" },
        { label: "Qunge genga", value: "Qunge genga" },
        { label: "Tange manue", value: "Tange manue" },
      ],
    },
    {
      label: "Electronics",
      children: [
        { label: "Body chains", value: "Body chains" },
        { label: "DIY Beads", value: "DIY Beads" },
        { label: "Egante magentes", value: "Egante magentes" },
        { label: "Necklaces", value: "Necklaces" },
      ],
    },
    { label: "Phones & PDAs", value: "Phones & PDAs" },
    {
      label: "Cup cake",
      children: [
        { label: "Delicacies", value: "Delicacies" },
        { label: "Salads", value: "Salads" },
        { label: "Sushi Corner", value: "Sushi Corner" },
        { label: "Cake & Cookies", value: "Cake & Cookies" },
      ],
    },
  ];

  if (!isOpen) {
    return null;
  }

  return (
    <div className="CategoriesSlide-overlay">
      <div className="CategoriesSlide-container">
        {/* Header Section */}
        <div className="CategoriesSlide-header">
          <div className="CategoriesSlide-headerContent">
            <i className="fas fa-bars CategoriesSlide-icon"></i>
            <span className="CategoriesSlide-headerText">ALL CATEGORIES</span>
          </div>
          {/* Close Icon with onClick Handler */}
          <i
            className="fas fa-times CategoriesSlide-closeIcon"
            onClick={handleClose} // Trigger the handleClose function
            role="button" // Accessibility: Indicates this is clickable
            tabIndex="0" // Accessibility: Makes it focusable
            aria-label="Close Categories Slide" // Accessibility: Provides a description for screen readers
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleClose();
              }
            }}
          ></i>
        </div>

        {/* Content Section */}
        <div className="CategoriesSlide-content">
          <ul className="CategoriesSlide-list">
            {categories.map((category, index) => (
              <React.Fragment key={index}>
                <li
                  className={`CategoriesSlide-item ${
                    category.children ? "has-children" : ""
                  }`}
                  onClick={() =>
                    category.children && toggleCategory(category.label)
                  }
                >
                  <span>{category.label}</span>
                  {category.children && (
                    <i
                      className={`fas ${
                        expandedCategories[category.label]
                          ? "fa-chevron-down"
                          : "fa-chevron-right"
                      } CategoriesSlide-arrow`}
                    ></i>
                  )}
                </li>
                {category.children && expandedCategories[category.label] && (
                  <ul
                    className={`CategoriesSlide-sublist ${
                      expandedCategories[category.label] ? "show" : ""
                    }`}
                  >
                    {category.children.map((subItem, idx) => (
                      <li key={idx} className="CategoriesSlide-subitem">
                        -{subItem.label}
                      </li>
                    ))}
                  </ul>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategorySlide;