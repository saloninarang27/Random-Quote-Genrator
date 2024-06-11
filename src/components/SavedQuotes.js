import React from 'react';
import './SavedQuotes.css';

function SavedQuotes({ savedQuotes }) {
  return (
    <div className="saved-quotes">
      <h2>Saved Quotes</h2>
      {savedQuotes.length === 0 ? (
        <p>No saved quotes yet.</p>
      ) : (
        savedQuotes.map((quote, index) => (
          <div key={index} className="saved-quote">
            "{quote}"
          </div>
        ))
      )}
    </div>
  );
}

export default SavedQuotes;
