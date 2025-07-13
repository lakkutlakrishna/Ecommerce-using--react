import React from 'react';
import '../styles/Grayscale.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

const Grayscale = () => {
  const copyToClipboard = () => {
    const content = document.getElementById('code-content').innerText;
    navigator.clipboard.writeText(content).then(() => {
      alert('Content copied to clipboard!');
    });
  };

  return (
    <div className="grayscale-container">
      <h1 className="grayscale-title">Grayscale Levels</h1>
      <div className="grayscale-swatch-grid">
        {/* Gray Darker */}
        <div className="grayscale-swatch-item grayscale-color-darker">
          Gray Darker
        </div>

        {/* Gray Dark */}
        <div className="grayscale-swatch-item grayscale-color-dark">
          Gray Dark
        </div>

        {/* Gray */}
        <div className="grayscale-swatch-item grayscale-color-gray">
          Gray
        </div>

        {/* Gray Light */}
        <div className="grayscale-swatch-item grayscale-color-light">
          Gray Light
        </div>

        {/* Gray Lighter */}
        <div className="grayscale-swatch-item grayscale-color-lighter">
          Gray Lighter
        </div>

        {/* Gray Lightest */}
        <div className="grayscale-swatch-item grayscale-color-lightest">
          Gray Lightest
        </div>
      </div>

      {/* Code Block */}
      <div className="grayscale-code-container">
        <button onClick={copyToClipboard} className="grayscale-copy-btn">
          <FontAwesomeIcon icon={faCopy} />
        </button>
        <pre id="code-content" className="grayscale-code-content">
          {`<div class="grayscale-swatch-item grayscale-color-darker">...</div>
<div class="grayscale-swatch-item grayscale-color-dark">...</div>
<div class="grayscale-swatch-item grayscale-color-gray">...</div>
<div class="grayscale-swatch-item grayscale-color-light">...</div>
<div class="grayscale-swatch-item grayscale-color-lighter">...</div>
<div class="grayscale-swatch-item grayscale-color-lightest">...</div>`}
        </pre>
      </div>
    </div>
  );
};

export default Grayscale;