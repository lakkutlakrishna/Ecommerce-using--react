import React from 'react';
import '../styles/Lists.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

const Lists = () => {
  const copyToClipboard = (elementId) => {
    const copyText = document.getElementById(elementId).textContent;
    navigator.clipboard.writeText(copyText).then(() => {
      alert('Copied to clipboard!');
    }, (err) => {
      alert('Failed to copy text: ', err);
    });
  };

  return (
    <div className="lists-container">
      <div className="lists-grid-container">
        {/* Definition Lists Section */}
        <div className="lists-section">
          <h2 className="lists-section-title">Definition Lists</h2>
          <div className="lists-content-box">
            <button onClick={() => copyToClipboard('lists-definition-list-code')} className="lists-copy-btn">
              <FontAwesomeIcon icon={faCopy} />
            </button>
            <h3 className="lists-content-title">Description lists</h3>
            <p className="lists-content-description">A description list is perfect for defining terms.</p>
            <dl>
              <dt className="lists-definition-term">Euismod</dt>
              <dd className="lists-definition-description">Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
              <dt className="lists-definition-term">Malesuada porta</dt>
              <dd className="lists-definition-description">Etiam porta sem malesuada magna mollis euismod.</dd>
            </dl>
            <pre id="lists-definition-list-code" className="lists-code-content">
              <code>
                {`<dl>
  <dt>...</dt>
  <dd>...</dd>
</dl>`}
              </code>
            </pre>
          </div>
        </div>

        {/* Horizontal Definition Section */}
        <div className="lists-section">
          <h2 className="lists-section-title">Horizontal Definition</h2>
          <div className="lists-content-box">
            <button onClick={() => copyToClipboard('lists-horizontal-definition-code')} className="lists-copy-btn">
              <FontAwesomeIcon icon={faCopy} />
            </button>
            <h3 className="lists-content-title">Description lists</h3>
            <p className="lists-content-description">A description list is perfect for defining terms.</p>
            <dl className="lists-horizontal-definition">
              <dt className="lists-definition-term">Euismod</dt>
              <dd className="lists-definition-description">Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
              <dt className="lists-definition-term">Malesuada porta</dt>
              <dd className="lists-definition-description">Etiam porta sem malesuada magna mollis euismod.</dd>
              <dt className="lists-definition-term">Felis euismod se...</dt>
              <dd className="lists-definition-description">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>
            </dl>
            <pre id="lists-horizontal-definition-code" className="lists-code-content">
              <code>
                {`<dl class="horizontal-definition">
  <dt>...</dt>
  <dd>...</dd>
</dl>`}
              </code>
            </pre>
          </div>
        </div>

        {/* Unordered Lists Section */}
        <div className="lists-section">
          <h2 className="lists-section-title">Lists</h2>
          <div className="lists-content-box">
            <button onClick={() => copyToClipboard('lists-unordered-list-code')} className="lists-copy-btn">
              <FontAwesomeIcon icon={faCopy} />
            </button>
            <h3 className="lists-content-title">Unordered Lists (Nested)</h3>
            <ul className="lists-unordered-list">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer molestie lorem at massa</li>
              <li>Facilisis in pretium nisl aliquet</li>
              <li>
                Nulla volutpat aliquam velit
                <ul className="lists-unordered-list nested">
                  <li>Phasellus iaculis neque</li>
                  <li>Purus sodales ultricies</li>
                  <li>Vestibulum laoreet porttitor sem</li>
                  <li>Ac tristique libero volutpat at</li>
                </ul>
              </li>
              <li>Faucibus porta lacus fringilla vel</li>
              <li>Aenean sit amet erat nunc</li>
              <li>Eget porttitor lorem</li>
            </ul>
            <pre id="lists-unordered-list-code" className="lists-code-content">
              <code>
                {`<ul class="unordered-list">
  <li>...</li>
</ul>`}
              </code>
            </pre>
          </div>
        </div>

        {/* Ordered Lists Section */}
        <div className="lists-section">
          <h2 className="lists-section-title">&nbsp;</h2>
          <div className="lists-content-box">
            <button onClick={() => copyToClipboard('lists-ordered-list-code')} className="lists-copy-btn">
              <FontAwesomeIcon icon={faCopy} />
            </button>
            <h3 className="lists-content-title">Ordered List (Nested)</h3>
            <ol className="lists-ordered-list">
              <li>
                List item one
                <p className="lists-list-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                <ol className="lists-ordered-list nested">
                  <li>List item two</li>
                  <li>List item three</li>
                  <li>List item four</li>
                </ol>
              </li>
              <li>List item two</li>
              <li>List item three</li>
              <li>List item four</li>
            </ol>
            <pre id="lists-ordered-list-code" className="lists-code-content">
              <code>
                {`<ol class="ordered-list">
  <li>...</li>
</ol>`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lists;