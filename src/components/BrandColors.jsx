import React from 'react';
import '../styles/BrandColors.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

const BrandColors = () => {
  const copyToClipboard = () => {
    const content = document.getElementById('code-content').innerText;
    navigator.clipboard.writeText(content).then(() => {
      alert('Content copied to clipboard!');
    });
  };

  return (
    <div className="brand-container">
      <h1 className="brand-title">Color Swatches</h1>
      <h2 className="brand-subtitle">Brand Colors</h2>
      <div className="brand-swatch-grid">
        {/* Brand Primary */}
        <div className="brand-swatch-item brand-color-primary">
          <p className="brand-swatch-hex">#324c69</p>
          <p className="brand-swatch-name">Brand Primary</p>
        </div>

        {/* Brand Secondary */}
        <div className="brand-swatch-item brand-color-secondary">
          <p className="brand-swatch-hex">#f9731f</p>
          <p className="brand-swatch-name">Brand Secondary</p>
        </div>

        {/* Brand Warning */}
        <div className="brand-swatch-item brand-color-warning">
          <p className="brand-swatch-hex">#f0ad4e</p>
          <p className="brand-swatch-name">Brand Warning</p>
        </div>

        {/* Brand Danger */}
        <div className="brand-swatch-item brand-color-danger">
          <p className="brand-swatch-hex">#d9534f</p>
          <p className="brand-swatch-name">Brand Danger</p>
        </div>

        {/* Brand Info */}
        <div className="brand-swatch-item brand-color-info">
          <p className="brand-swatch-hex">#5bc0de</p>
          <p className="brand-swatch-name">Brand Info</p>
        </div>

        {/* Brand Success */}
        <div className="brand-swatch-item brand-color-success">
          <p className="brand-swatch-hex">#5cb85c</p>
          <p className="brand-swatch-name">Brand Success</p>
        </div>
      </div>

      {/* Code Block */}
      <div className="brand-code-container">
        <button onClick={copyToClipboard} className="brand-copy-btn">
          <FontAwesomeIcon icon={faCopy} />
        </button>
        <pre id="code-content" className="brand-code-content">
          {`<div class="brand-swatch-item brand-color-primary">...</div>
<div class="brand-swatch-item brand-color-secondary">...</div>
<div class="brand-swatch-item brand-color-warning">...</div>
<div class="brand-swatch-item brand-color-danger">...</div>
<div class="brand-swatch-item brand-color-info">...</div>
<div class="brand-swatch-item brand-color-success">...</div>`}
        </pre>
      </div>
    </div>
  );
};

export default BrandColors;