import React from 'react';
import '../styles/Headings_Leadings.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

const Headings_Leadings = () => {
  const copyToClipboard = (elementId) => {
    const copyText = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(copyText).then(() => {
      alert('Copied to clipboard');
    }, (err) => {
      alert('Failed to copy text: ', err);
    });
  };

  return (
    <div className="hl-container">
      <div className="hl-grid-container">
        {/* Headings Section */}
        <div className="hl-section">
          <h2 className="hl-section-title">Headings</h2>
          <p className="hl-section-description">
            All HTML headings, <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code>, are available.
          </p>
          <div className="hl-content-box">
            <h1 className="hl-heading hl-h1">h1. Bootstrap heading</h1>
            <h2 className="hl-heading hl-h2">h2. Bootstrap heading</h2>
            <h3 className="hl-heading hl-h3">h3. Bootstrap heading</h3>
            <h4 className="hl-heading hl-h4">h4. Bootstrap heading</h4>
            <h5 className="hl-heading hl-h5">h5. Bootstrap heading</h5>
            <h6 className="hl-heading hl-h6">h6. Bootstrap heading</h6>
          </div>
          <div className="hl-code-container">
            <button className="hl-copy-btn" onClick={() => copyToClipboard('hl-headings-code')}>
              <FontAwesomeIcon icon={faCopy} />
            </button>
            <pre id="hl-headings-code" className="hl-code-content">
              <code>
                {`<p class="h1">h1. Bootstrap heading</p>
<p class="h2">h2. Bootstrap heading</p>
<p class="h3">h3. Bootstrap heading</p>
<p class="h4">h4. Bootstrap heading</p>
<p class="h5">h5. Bootstrap heading</p>
<p class="h6">h6. Bootstrap heading</p>`}
              </code>
            </pre>
          </div>
        </div>

        {/* Lead Section */}
        <div className="hl-section">
          <h2 className="hl-section-title">Lead</h2>
          <p className="hl-section-description">
            Make a paragraph stand out by adding <code>.lead</code>.
          </p>
          <div className="hl-content-box">
            <p className="hl-lead-bold">This is a lead paragraph.</p>
            <p className="hl-lead-text">
              Make a paragraph stand out by adding <code>.lead</code>.
            </p>
            <p className="hl-text">
              Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.
            </p>
            <p className="hl-text"><strong>The following snippet of text is rendered as bold text.</strong></p>
            <p className="hl-text"><em>The following snippet of text is rendered as italicized text.</em></p>
            <p className="hl-text">
              An abbreviation of the word attribute is <abbr title="attribute">attr</abbr>.
            </p>
          </div>
          <div className="hl-code-container">
            <button className="hl-copy-btn" onClick={() => copyToClipboard('hl-lead-code')}>
              <FontAwesomeIcon icon={faCopy} />
            </button>
            <pre id="hl-lead-code" className="hl-code-content">
              <code>
                {`<p class="lead">
  This is a <strong>lead paragraph</strong>.<br>
  Make a paragraph stand out by adding <code>.lead</code>.
</p>`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headings_Leadings;