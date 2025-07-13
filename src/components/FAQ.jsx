import React, { useState } from 'react';
import '../styles/FAQ.css'; // Import the CSS file

const FAQ = () => {
  // State to manage which question is currently open
  const [openQuestion, setOpenQuestion] = useState(null);

  // Function to handle question click
  const handleQuestionClick = (question) => {
    if (openQuestion === question) {
      setOpenQuestion(null); // Close the question if it's already open
    } else {
      setOpenQuestion(question); // Open the clicked question
    }
  };

  return (
    <div className="faq-container">
      {/* Breadcrumb */}
      <div className="faq-breadcrumb">
        <a href="#" className="faq-breadcrumb-link">Home</a> &gt; <span>FAQ</span>
      </div>

      {/* Delivery Section */}
      <h1 className="faq-section-title">Delivery</h1>
      <div className="faq-section">
        <div className="faq-header faq-header-active">
          <i className="fas fa-truck faq-icon"></i>
          <span className="faq-header-text">Sed Do Eiusmod Tempor Incididunt</span>
        </div>
        <div className="faq-content">
          <p className="faq-content-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua.
          </p>
        </div>
      </div>

      {/* Delivery Questions */}
      <div className="faq-questions">
        <div
          className={`faq-question ${openQuestion === 'delivery1' ? 'faq-question-active' : ''}`}
          onClick={() => handleQuestionClick('delivery1')}
        >
          <i className="fas fa-question-circle faq-icon"></i>
          <span className="faq-question-text">Lorem Ipsum Dolor Sit Amet Elit?</span>
        </div>
        {openQuestion === 'delivery1' && (
          <div className="faq-answer">
            <p className="faq-answer-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        )}
        <div
          className={`faq-question ${openQuestion === 'delivery2' ? 'faq-question-active' : ''}`}
          onClick={() => handleQuestionClick('delivery2')}
        >
          <i className="fas fa-question-circle faq-icon"></i>
          <span className="faq-question-text">Ut Enim Ad Minim Veniam</span>
        </div>
        {openQuestion === 'delivery2' && (
          <div className="faq-answer">
            <p className="faq-answer-text">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        )}
      </div>

      {/* Warranty Section */}
      <h1 className="faq-section-title">Warranty</h1>
      <div className="faq-questions">
        <div
          className={`faq-question ${openQuestion === 'warranty1' ? 'faq-question-active' : ''}`}
          onClick={() => handleQuestionClick('warranty1')}
        >
          <i className="fas fa-question-circle faq-icon"></i>
          <span className="faq-question-text">Lorem Ipsum Dolor Sit Amet</span>
        </div>
        {openQuestion === 'warranty1' && (
          <div className="faq-answer">
            <p className="faq-answer-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
          </div>
        )}
        <div
          className={`faq-question ${openQuestion === 'warranty2' ? 'faq-question-active' : ''}`}
          onClick={() => handleQuestionClick('warranty2')}
        >
          <i className="fas fa-question-circle faq-icon"></i>
          <span className="faq-question-text">Ut Enim Ad Minim Veniam</span>
        </div>
        {openQuestion === 'warranty2' && (
          <div className="faq-answer">
            <p className="faq-answer-text">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        )}
        <div
          className={`faq-question ${openQuestion === 'warranty3' ? 'faq-question-active' : ''}`}
          onClick={() => handleQuestionClick('warranty3')}
        >
          <i className="fas fa-question-circle faq-icon"></i>
          <span className="faq-question-text">Quis Nostrud Exercitation</span>
        </div>
        {openQuestion === 'warranty3' && (
          <div className="faq-answer">
            <p className="faq-answer-text">
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        )}
        <div
          className={`faq-question ${openQuestion === 'warranty4' ? 'faq-question-active' : ''}`}
          onClick={() => handleQuestionClick('warranty4')}
        >
          <i className="fas fa-question-circle faq-icon"></i>
          <span className="faq-question-text">Consectetur Adipiscing Elit</span>
        </div>
        {openQuestion === 'warranty4' && (
          <div className="faq-answer">
            <p className="faq-answer-text">
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        )}
      </div>

      {/* Payment Section */}
      <h1 className="faq-section-title">Payment</h1>
      <div className="faq-questions">
        <div
          className={`faq-question ${openQuestion === 'payment1' ? 'faq-question-active' : ''}`}
          onClick={() => handleQuestionClick('payment1')}
        >
          <i className="fas fa-question-circle faq-icon"></i>
          <span className="faq-question-text">Sed Do Eiusmod Tempor Incididunt</span>
        </div>
        {openQuestion === 'payment1' && (
          <div className="faq-answer">
            <p className="faq-answer-text">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        )}
        <div
          className={`faq-question ${openQuestion === 'payment2' ? 'faq-question-active' : ''}`}
          onClick={() => handleQuestionClick('payment2')}
        >
          <i className="fas fa-question-circle faq-icon"></i>
          <span className="faq-question-text">Consectetur Adipiscing Elit</span>
        </div>
        {openQuestion === 'payment2' && (
          <div className="faq-answer">
            <p className="faq-answer-text">
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQ;