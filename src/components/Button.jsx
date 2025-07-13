import React from 'react';
import '../styles/Button.css'; // Import the CSS file

const Button = () => {
  const copyToClipboard = () => {
    const content = document.getElementById('code-content').innerText;
    navigator.clipboard.writeText(content).then(() => {
      alert('Content copied to clipboard!');
    });
  };

  return (
    <div className="button-container">
      <h1 className="button-title">Buttons</h1>
      <div className="button-group">
        <a className="btn btn-default" href="#">Normal Button</a>
        <a className="btn btn-primary" href="#">PRIMARY BUTTON</a>
        <a className="btn btn-warning" href="#">Warning Button</a>
        <a className="btn btn-danger" href="#">Danger Button</a>
        <a className="btn btn-info" href="#">INFO BUTTON</a>
        <a className="btn btn-success" href="#">Success Button</a>
      </div>
      <div className="code-container">
        <button onClick={copyToClipboard} className="copy-button">Copy</button>
        <pre id="code-content" className="code-content">
          {`<a class="btn btn-default" href="#">Normal Button</a>
<a class="btn btn-primary" href="#">Primary Button</a>
<a class="btn btn-warning" href="#">Warning Button</a>
<a class="btn btn-danger" href="#">Danger Button</a>
<a class="btn btn-info" href="#">Info Button</a>
<a class="btn btn-success" href="#">Success Button</a>`}
        </pre>
      </div>
    </div>
  );
};

export default Button;