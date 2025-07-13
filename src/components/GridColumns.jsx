import React from 'react';
import '../styles/GridColumns.css'; // Import the CSS file

const GridColumns = () => {
  return (
    <div className="grid-columns-container">
      <h1 className="grid-columns-title">Grid Columns</h1>

      {/* 1 Column Section */}
      <div className="grid-section">
        <h2 className="grid-section-title">1 COLUMN</h2>
        <div className="grid-section-content">
          <p className="text-center">Center Align</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <p className="text-right">Right Align</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </div>

      {/* 1/2 Columns Section */}
      <div className="grid-section">
        <h2 className="grid-section-title">1/2 COLUMNS</h2>
        <div className="grid-columns grid-cols-2">
          <div className="grid-column">
            <p>Maecenas aliquet risus ac, non faucibus arcu gravida ut. Sed dictum pellentesque justo lorem, pellentesque fermentum felis pulvinar ut. In non magna lorem. Suspendisse potenti. Etiam sit amet molestie magna.</p>
          </div>
          <div className="grid-column">
            <p>Maecenas aliquet risus ac, non faucibus arcu gravida ut. Sed dictum pellentesque justo lorem, pellentesque fermentum felis pulvinar ut. In non magna lorem. Suspendisse potenti. Etiam sit amet molestie magna.</p>
          </div>
        </div>
      </div>

      {/* 1/3 Columns Section */}
      <div className="grid-section">
        <h2 className="grid-section-title">1/3 COLUMNS</h2>
        <div className="grid-columns grid-cols-3">
          <div className="grid-column">
            <p>Maecenas aliquet risus ac, non faucibus arcu gravida ut. Sed dictum pellentesque justo lorem, pellentesque fermentum felis pulvinar ut. In non magna lorem. Suspendisse potenti. Etiam sit amet molestie magna.</p>
          </div>
          <div className="grid-column">
            <p>Maecenas aliquet risus ac, non faucibus arcu gravida ut. Sed dictum pellentesque justo lorem, pellentesque fermentum felis pulvinar ut. In non magna lorem. Suspendisse potenti. Etiam sit amet molestie magna.</p>
          </div>
          <div className="grid-column">
            <p>Maecenas aliquet risus ac, non faucibus arcu gravida ut. Sed dictum pellentesque justo lorem, pellentesque fermentum felis pulvinar ut. In non magna lorem. Suspendisse potenti. Etiam sit amet molestie magna.</p>
          </div>
        </div>
      </div>

      {/* 2/3 Columns Section */}
      <div className="grid-section">
        <h2 className="grid-section-title">2/3 COLUMNS</h2>
        <div className="grid-columns grid-cols-2-3">
          <div className="grid-column">
            <p>Maecenas aliquet risus ac, non faucibus arcu gravida ut. Sed dictum pellentesque justo lorem, pellentesque fermentum felis pulvinar ut. In non magna lorem. Suspendisse potenti. Etiam sit amet molestie magna.</p>
          </div>
          <div className="grid-column">
            <p>Maecenas aliquet risus ac, non faucibus arcu gravida ut. Sed dictum pellentesque justo lorem, pellentesque fermentum felis pulvinar ut. In non magna lorem. Suspendisse potenti. Etiam sit amet molestie magna.</p>
          </div>
        </div>
      </div>

      {/* 1/4 Columns Section */}
      <div className="grid-section">
        <h2 className="grid-section-title">1/4 COLUMNS</h2>
        <div className="grid-columns grid-cols-4">
          <div className="grid-column">
            <p>Maecenas aliquet risus ac, non faucibus arcu gravida ut. Sed dictum pellentesque justo lorem, pellentesque fermentum felis pulvinar ut. In non magna lorem. Suspendisse potenti. Etiam sit amet molestie magna.</p>
          </div>
          <div className="grid-column">
            <p>Maecenas aliquet risus ac, non faucibus arcu gravida ut. Sed dictum pellentesque justo lorem, pellentesque fermentum felis pulvinar ut. In non magna lorem. Suspendisse potenti. Etiam sit amet molestie magna.</p>
          </div>
          <div className="grid-column">
            <p>Maecenas aliquet risus ac, non faucibus arcu gravida ut. Sed dictum pellentesque justo lorem, pellentesque fermentum felis pulvinar ut. In non magna lorem. Suspendisse potenti. Etiam sit amet molestie magna.</p>
          </div>
          <div className="grid-column">
            <p>Maecenas aliquet risus ac, non faucibus arcu gravida ut. Sed dictum pellentesque justo lorem, pellentesque fermentum felis pulvinar ut. In non magna lorem. Suspendisse potenti. Etiam sit amet molestie magna.</p>
          </div>
        </div>
      </div>

      {/* 3/4 Columns Section */}
      <div className="grid-section">
        <h2 className="grid-section-title">3/4 COLUMNS</h2>
        <div className="grid-columns grid-cols-3-4">
          <div className="grid-column">
            <p>Maecenas aliquet risus ac, non faucibus arcu gravida ut. Sed dictum pellentesque justo lorem, pellentesque fermentum felis pulvinar ut. In non magna lorem. Suspendisse potenti. Etiam sit amet molestie magna.</p>
          </div>
          <div className="grid-column">
            <p>Maecenas aliquet risus ac, non faucibus arcu gravida ut. Sed dictum pellentesque justo lorem, pellentesque fermentum felis pulvinar ut. In non magna lorem. Suspendisse potenti. Etiam sit amet molestie magna.</p>
          </div>
        </div>
      </div>

      {/* 1/6 Columns Section */}
      <div className="grid-section">
        <h2 className="grid-section-title">1/6 COLUMNS</h2>
        <div className="grid-columns grid-cols-6">
          <div className="grid-column">
            <p>Maecenas aliquet risus ac, non faucibus arcu gravida ut. Sed dictum pellentesque justo lorem, pellentesque fermentum felis pulvinar ut. In non magna lorem. Suspendisse potenti. Etiam sit amet molestie magna.</p>
          </div>
          <div className="grid-column">
            <p>Maecenas aliquet risus ac, non faucibus arcu gravida ut. Sed dictum pellentesque justo lorem, pellentesque fermentum felis pulvinar ut. In non magna lorem. Suspendisse potenti. Etiam sit amet molestie magna.</p>
          </div>
          <div className="grid-column">
            <p>Maecenas aliquet risus ac, non faucibus arcu gravida ut. Sed dictum pellentesque justo lorem, pellentesque fermentum felis pulvinar ut. In non magna lorem. Suspendisse potenti. Etiam sit amet molestie magna.</p>
          </div>
          <div className="grid-column">
            <p>Maecenas aliquet risus ac, non faucibus arcu gravida ut. Sed dictum pellentesque justo lorem, pellentesque fermentum felis pulvinar ut. In non magna lorem. Suspendisse potenti. Etiam sit amet molestie magna.</p>
          </div>
          <div className="grid-column">
            <p>Maecenas aliquet risus ac, non faucibus arcu gravida ut. Sed dictum pellentesque justo lorem, pellentesque fermentum felis pulvinar ut. In non magna lorem. Suspendisse potenti. Etiam sit amet molestie magna.</p>
          </div>
          <div className="grid-column">
            <p>Maecenas aliquet risus ac, non faucibus arcu gravida ut. Sed dictum pellentesque justo lorem, pellentesque fermentum felis pulvinar ut. In non magna lorem. Suspendisse potenti. Etiam sit amet molestie magna.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridColumns;