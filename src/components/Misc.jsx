import React from 'react';
import '../styles/Misc.css'; // Import the CSS file

const Misc = () => {
  const copyToClipboard = () => {
    const content = document.getElementById('code-content').innerText;
    navigator.clipboard.writeText(content).then(() => {
      alert('Content copied to clipboard!');
    });
  };

  return (
    <div className="misc-container">
      <h1 className="misc-title">Misc</h1>
      <h2 className="misc-subtitle">Panels</h2>
      <div className="misc-panels-grid">
        {/* Default Panel */}
        <div className="misc-panel misc-panel-default">
          <div className="misc-panel-heading">Panel heading</div>
          <div className="misc-panel-content">Panel content</div>
        </div>

        {/* Success Panel */}
        <div className="misc-panel misc-panel-success">
          <div className="misc-panel-heading">Panel success</div>
          <div className="misc-panel-content">Panel content</div>
        </div>

        {/* Danger Panel */}
        <div className="misc-panel misc-panel-danger">
          <div className="misc-panel-heading">Panel danger</div>
          <div className="misc-panel-content">Panel content</div>
        </div>

        {/* Primary Panel */}
        <div className="misc-panel misc-panel-primary">
          <div className="misc-panel-heading">Panel primary</div>
          <div className="misc-panel-content">Panel content</div>
        </div>

        {/* Warning Panel */}
        <div className="misc-panel misc-panel-warning">
          <div className="misc-panel-heading">Panel warning</div>
          <div className="misc-panel-content">Panel content</div>
        </div>

        {/* Info Panel */}
        <div className="misc-panel misc-panel-info">
          <div className="misc-panel-heading">Panel info</div>
          <div className="misc-panel-content">Panel content</div>
        </div>
      </div>

      {/* Code Block */}
      <div className="misc-code-container">
        <button onClick={copyToClipboard} className="misc-copy-button">
          Copy
        </button>
        <pre id="code-content" className="misc-code-content">
          {`<div class="panel panel-default">...</div>
<div class="panel panel-primary">...</div>
<div class="panel panel-success">...</div>
<div class="panel panel-info">...</div>
<div class="panel panel-warning">...</div>
<div class="panel panel-danger">...</div>`}
        </pre>
      </div>
    </div>
  );
};

export default Misc;