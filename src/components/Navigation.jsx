import React from 'react';
import '../styles/Navigation.css'; // Import the corresponding CSS file

const Navigation = () => {
  const selectTab = (element) => {
    // Remove active class from all buttons
    document.querySelectorAll('.navigation-tab-button').forEach((button) => {
      button.classList.remove('navigation-tab-button--active');
      button.classList.add('bg-gray-200', 'text-gray-700');
      button.classList.remove('bg-orange-500', 'text-white');
    });
    // Add active class to the clicked button
    element.classList.add('navigation-tab-button--active');
    element.classList.remove('bg-gray-200', 'text-gray-700');
    element.classList.add('bg-orange-500', 'text-white');
  };

  return (
    <div className="navigation-container">
      <h1 className="navigation-title">Navigations</h1>
      <div className="navigation-layout">
        {/* Tabs Section */}
        <div className="navigation-tabs">
          <h2 className="navigation-section-title">Tabs</h2>
          <div className="navigation-tab-buttons">
            <button
              className="navigation-tab-button navigation-tab-button--active"
              onClick={(e) => selectTab(e.target)}
            >
              HOME
            </button>
            <button
              className="navigation-tab-button"
              onClick={(e) => selectTab(e.target)}
            >
              PROFILE
            </button>
            <div className="navigation-dropdown">
              <button
                className="navigation-tab-button navigation-tab-button--active"
                onClick={(e) => selectTab(e.target)}
              >
                DROPDOWN
              </button>
              <div className="navigation-dropdown-content">
                <a href="#">Action</a>
                <a href="#">Another action</a>
                <a href="#">Another action</a>
              </div>
            </div>
          </div>
          <p className="navigation-description">
            In the area of graphical user interfaces (GUI), a{' '}
            <span className="navigation-description-bold">tabbed document interface</span>{' '}
            (TDI) or a Tab is one that allows multiple documents to be contained within a
            single window, using tabs as a navigational widget for switching between sets
            of documents. It is an interface style most commonly associated with web
            browsers, web applications, text editors, and preference panes.
          </p>
          <p className="navigation-description">
            GUI tabs are modeled after traditional card tabs inserted in paper files or
            card indexes (in keeping with the desktop metaphor).
          </p>
        </div>

        {/* Vertical Menus Section */}
        <div className="navigation-vertical-menu">
          <h2 className="navigation-section-title">Vertical Menus</h2>
          <ul className="navigation-menu-list">
            <li className="navigation-menu-item navigation-menu-item--active">
              Active Menu Item
            </li>
            <li className="navigation-menu-item">Menu Item</li>
            <li className="navigation-menu-item">Menu Item</li>
            <li className="navigation-menu-item navigation-menu-item--disabled">
              Disabled Menu Item
            </li>
            <li className="navigation-menu-item">Dropdown</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;