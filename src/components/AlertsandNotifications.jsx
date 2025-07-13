import React from 'react';
import '../styles/AlertsandNotifications.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle, faCheckCircle, faInfoCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const AlertsandNotifications = () => {
  const copyToClipboard = () => {
    const content = document.getElementById('code-content').innerText;
    navigator.clipboard.writeText(content).then(() => {
      alert('Content copied to clipboard!');
    });
  };

  return (
    <div className="alerts-container">
      <h1 className="alerts-title">Alerts and Notifications</h1>
      <div className="alerts-grid">
        {/* Error Message */}
        <div className="alerts-alert alerts-alert-error">
          <FontAwesomeIcon icon={faExclamationCircle} className="alerts-icon" />
          <div>
            <h2 className="alerts-heading">Error message title</h2>
            <p className="alerts-text">
              Donec eget purus nec tellus tincidunt lacinia et sed lorem. Cras ac dignissim mauris. Duis odio diam, rutrum ut est at, scelerisque malesuada risus.
            </p>
          </div>
        </div>

        {/* Success Message */}
        <div className="alerts-alert alerts-alert-success">
          <FontAwesomeIcon icon={faCheckCircle} className="alerts-icon" />
          <div>
            <h2 className="alerts-heading">Success message title</h2>
            <p className="alerts-text">
              Donec eget purus nec tellus tincidunt lacinia et sed lorem. Cras ac dignissim mauris. Duis odio diam, rutrum ut est at, scelerisque malesuada risus.
            </p>
          </div>
        </div>

        {/* Info Message */}
        <div className="alerts-alert alerts-alert-info">
          <FontAwesomeIcon icon={faInfoCircle} className="alerts-icon" />
          <div>
            <h2 className="alerts-heading">Info message title</h2>
            <p className="alerts-text">
              Donec eget purus nec tellus tincidunt lacinia et sed lorem. Cras ac dignissim mauris. Duis odio diam, rutrum ut est at, scelerisque malesuada risus.
            </p>
          </div>
        </div>

        {/* Warning Message */}
        <div className="alerts-alert alerts-alert-warning">
          <FontAwesomeIcon icon={faExclamationTriangle} className="alerts-icon" />
          <div>
            <h2 className="alerts-heading">Warning message title</h2>
            <p className="alerts-text">
              Donec eget purus nec tellus tincidunt lacinia et sed lorem. Cras ac dignissim mauris. Duis odio diam, rutrum ut est at, scelerisque malesuada risus.
            </p>
          </div>
        </div>
      </div>

      {/* Code Block */}
      <div className="alerts-code-container">
        <button onClick={copyToClipboard} className="alerts-copy-button">
          Copy
        </button>
        <pre id="code-content" className="alerts-code-content">
          {`<div class="alert alert-success" role="alert">...</div>
<div class="alert alert-info" role="alert">...</div>
<div class="alert alert-warning" role="alert">...</div>
<div class="alert alert-danger" role="alert">...</div>`}
        </pre>
      </div>
    </div>
  );
};

export default AlertsandNotifications;