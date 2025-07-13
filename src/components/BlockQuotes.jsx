import React from 'react';
import '../styles/BlockQuotes.css'; // Import the corresponding CSS file

const BlockQuotes = () => {
  const copyToClipboard = (elementId) => {
    const copyText = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(copyText)
      .then(() => {
        alert('Copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <div className="blockquotes-container">
      {/* Blockquotes Section */}
      <section className="blockquotes-section">
        <h2 className="blockquotes-title">Blockquotes</h2>
        <p className="blockquotes-description">
          For quoting blocks of content from another source within your document.
        </p>
        <div className="blockquotes-card">
          <button
            className="blockquotes-copy-button"
            onClick={() => copyToClipboard('blockquote-code')}
          >
            Copy
          </button>
          <div className="blockquotes-content">
            <blockquote className="blockquotes-blockquote">
              <p className="blockquotes-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
              </p>
              <footer className="blockquotes-footer">
                — Quote's author in <cite>Source Title</cite>
              </footer>
            </blockquote>
            <blockquote className="blockquotes-blockquote blockquotes-blockquote-reverse">
              <p className="blockquotes-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
              </p>
              <footer className="blockquotes-footer">
                — Quote's author in <cite>Source Title</cite>
              </footer>
            </blockquote>
          </div>
          <pre id="blockquote-code" className="blockquotes-code">
            <code>
{`<blockquote>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>
<blockquote class="blockquote-reverse">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>`}
            </code>
          </pre>
        </div>
      </section>

      {/* Tags Section */}
      <section className="tags-section">
        <h2 className="tags-title">Tags</h2>
        <div className="tags-card">
          <button
            className="tags-copy-button"
            onClick={() => copyToClipboard('tags-code')}
          >
            Copy
          </button>
          <div className="tags-content">
            <span className="tags-tag tags-tag-default">HOTEL</span>
            <span className="tags-tag tags-tag-primary">BOOKING</span>
            <span className="tags-tag tags-tag-success">DISCOUNT</span>
            <span className="tags-tag tags-tag-info">LOCATION</span>
            <span className="tags-tag tags-tag-warning">MAP</span>
            <span className="tags-tag tags-tag-danger">TRAVEL</span>
          </div>
          <pre id="tags-code" className="tags-code">
            <code>
{`<div class="tags">
  <span class="tag"><a class="label label-default" href="#">hotel</a></span>
  <span class="tag"><a class="label label-primary" href="#">booking</a></span>
  <span class="tag"><a class="label label-success" href="#">discount</a></span>
  <span class="tag"><a class="label label-info" href="#">location</a></span>
  <span class="tag"><a class="label label-warning" href="#">map</a></span>
  <span class="tag"><a class="label label-danger" href="#">travel</a></span>
</div>`}
            </code>
          </pre>
        </div>
      </section>
    </div>
  );
};

export default BlockQuotes;