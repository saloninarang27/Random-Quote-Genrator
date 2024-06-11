import React from 'react';
import './QuoteCard.css';

function QuoteCard({ quote, saveQuote, fetchQuote }) {
  return (
    <div className="quote-card">
      <p>"{quote}"</p>
      <button onClick={saveQuote}>Save Quote</button>
      <button onClick={fetchQuote}>New Quote</button>
    </div>
  );
}

export default QuoteCard;
