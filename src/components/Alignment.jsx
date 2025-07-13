import React from 'react';
import '../styles/Alignment.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

const Alignment = () => {
  const copyToClipboard = (elementId) => {
    const copyText = document.getElementById(elementId).textContent;
    navigator.clipboard.writeText(copyText).then(() => {
      alert('Copied to clipboard!');
    }, (err) => {
      alert('Failed to copy text: ', err);
    });
  };

  return (
    <div className="Alignment-container">
      <div className="Alignment-grid-container">
        {/* Address Section */}
        <div className="Alignment-section">
          <h2 className="Alignment-section-title">Address</h2>
          <div className="Alignment-content-box">
            <button onClick={() => copyToClipboard('addressCode')} className="Alignment-copy-btn">
              <FontAwesomeIcon icon={faCopy} />
            </button>
            <address>
              <strong>Company Name</strong><br />
              795 Folsom Ave, Suite 600<br />
              San Francisco, CA 94107<br />
              <abbr title="Phone">P:</abbr> (123) 456-7890
            </address>
            <address>
              <strong>Full Name</strong><br />
              <a href="mailto:first.last@example.com">first.last@example.com</a>
            </address>
            <pre id="addressCode" className="Alignment-code-content">
              <code>
                {`<address>
  <strong>Company Name</strong><br>
  795 Folsom Ave, Suite 600<br>
  San Francisco, CA 94107<br>
  <abbr title="Phone">P:</abbr> (123) 456-7890
</address>
<address>
  <strong>Full Name</strong><br>
  <a href="mailto:#">first.last@example.com</a>
</address>`}
              </code>
            </pre>
          </div>
        </div>

        {/* Emphasis Classes Section */}
        <div className="Alignment-section">
          <h2 className="Alignment-section-title">Emphasis Classes</h2>
          <div className="Alignment-content-box">
            <button onClick={() => copyToClipboard('emphasisCode')} className="Alignment-copy-btn">
              <FontAwesomeIcon icon={faCopy} />
            </button>
            <p className="Alignment-text-muted">This is a <span className="Alignment-text-muted">.mute</span> paragraph.</p>
            <p className="Alignment-text-primary">This is a <span className="Alignment-text-primary">.text-primary</span> paragraph.</p>
            <p className="Alignment-text-warning">This is a <span className="Alignment-text-warning">.text-warning</span> paragraph.</p>
            <p className="Alignment-text-danger">This is a <span className="Alignment-text-danger">.text-danger</span> paragraph.</p>
            <p className="Alignment-text-success">This is a <span className="Alignment-text-success">.text-success</span> paragraph.</p>
            <p className="Alignment-text-info">This is a <span className="Alignment-text-info">.text-info</span> paragraph.</p>
            <pre id="emphasisCode" className="Alignment-code-content">
              <code>
                {`<p class="text-muted">...</p>
<p class="text-primary">...</p>
<p class="text-success">...</p>
<p class="text-info">...</p>
<p class="text-warning">...</p>
<p class="text-danger">...</p>`}
              </code>
            </pre>
          </div>
        </div>

        {/* Alignment Classes Section */}
        <div className="Alignment-section Alignment-col-span-2">
          <h2 className="Alignment-section-title">Alignment Classes</h2>
          <div className="Alignment-content-box">
            <button onClick={() => copyToClipboard('alignmentCode')} className="Alignment-copy-btn">
              <FontAwesomeIcon icon={faCopy} />
            </button>
            <p className="Alignment-text-left">This is a left aligned text <span className="Alignment-text-left">.text-left</span></p>
            <p className="Alignment-text-center">This is a center aligned text <span className="Alignment-text-center">.text-center</span></p>
            <p className="Alignment-text-right">This is a right aligned text <span className="Alignment-text-right">.text-right</span></p>
            <p className="Alignment-text-justify">This is a justify aligned text which is often used in Book Design, Magazine or special Typo Pages. Create a justify aligned text with <span className="Alignment-text-justify">.text-justify</span> class.</p>
            <pre id="alignmentCode" className="Alignment-code-content">
              <code>
                {`<p class="text-left">Left aligned text.</p>
<p class="text-center">Center aligned text.</p>
<p class="text-right">Right aligned text.</p>
<p class="text-justify">Justified text.</p>
<p class="text-nowrap">No wrap text.</p>`}
              </code>
            </pre>
          </div>
        </div>

        {/* Dropcaps Section */}
        <div className="Alignment-section">
          <h2 className="Alignment-section-title">Dropcaps</h2>
          <div className="Alignment-content-box">
            <button onClick={() => copyToClipboard('dropcapsCode')} className="Alignment-copy-btn">
              <FontAwesomeIcon icon={faCopy} />
            </button>
            <p><span className="Alignment-dropcap Alignment-color-custom">D</span> Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod</p>
            <p>Integer dictum sit amet vitae sem. Vestibulum justo. Nulla mauris ipsum, convallis ut, vestibulum eu, tincidunt vel, nisi. Cras mollis euismod erat. Proin eros odio, mattis rutrum, pulvinar et, egestas vitae, magna. Integer semper, velit ut nisl. Nam lectus nulla, bibendum pretium, dictum a, mattis nec, dolor.</p>
            <p><span className="Alignment-dropcap Alignment-color-dark">D</span> Integer non eros gravida venenatis. Ut euismod, turpis sollicitudin lobortis pellentesque, libero massa dapibus dui, eu dictum justo urna et mi. Integer dictum sit amet vitae sem. Vestibulum justo. Nulla mauris ipsum, convallis ut, vestibulum eu, tincidunt vel, nisi. Cras mollis euismod erat. Proin eros odio, mattis rutrum, pulvinar et, egestas vitae, magna. Integer semper, velit ut nisl. Nam lectus nulla, bibendum pretium, dictum a, mattis nec, dolor.</p>
            <pre id="dropcapsCode" className="Alignment-code-content">
              <code>
                {`<span class="dropcap color-custom">D</span>
<span class="dropcap color-dark">D</span>`}
              </code>
            </pre>
          </div>
        </div>

        {/* Heading Helper Classes Section */}
        <div className="Alignment-section">
          <h2 className="Alignment-section-title">Heading Helper Classes</h2>
          <div className="Alignment-content-box">
            <button onClick={() => copyToClipboard('headingHelperCode')} className="Alignment-copy-btn">
              <FontAwesomeIcon icon={faCopy} />
            </button>
            <p><span className="Alignment-mark Alignment-bg-custom Alignment-color-white">Lorem ipsum</span> dolor sit amet, <span className="Alignment-color-custom Alignment-underline">consectetur adipiscing elit</span>. Donec eros tellus, scelerisque nec, rhoncus eget, sollicitudin vel, vehicula venenatis, tempor vitae, est. <a href="#" className="Alignment-color-custom Alignment-underline">Praesent vitae dui</a>. Morbi id tellus. Nullam ac nisi non eros gravida venenatis. Ut euismod, turpis sollicitudin lobortis pellentesque, libero massa dapibus dui, eu dictum justo urna et mi. Integer dictum sit amet vitae sem.</p>
            <pre id="headingHelperCode" className="Alignment-code-content">
              <code>
                {`<span class="mark bg-custom color-white">...</span>
<span class="mark bg-black color-white">...</span>
<a href="#" class="color-custom underline">...</a>
<a href="#" class="color-dark underline">...</a>`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alignment;