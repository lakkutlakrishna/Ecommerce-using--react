import React from 'react';
import '../styles/Wells.css'; // Import the corresponding CSS file

const Wells = () => {
  const copyToClipboard = () => {
    const codeBlock = document.getElementById('code-block').innerText;
    navigator.clipboard.writeText(codeBlock)
      .then(() => {
        alert('Code copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <div className="wells-container">
      <h1 className="wells-title">Wells</h1>
      <div className="wells-grid">
        <div className="wells-item wells-item--small">
          Look, I'm in a small well!
        </div>
        <div className="wells-item wells-item--medium">
          Look, I'm in a well!
        </div>
        <div className="wells-item wells-item--large">
          Look, I'm in a large well!
        </div>
      </div>
      <div className="wells-code-block">
        <button className="wells-copy-button" onClick={copyToClipboard}>
          Copy
        </button>
        <pre className="wells-code-pre">
          <code id="code-block">
{`<div class="well well-sm">...</div>
<div class="well">...</div>
<div class="well well-lg">...</div>`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Wells;