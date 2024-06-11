import React, { useState, useEffect } from 'react';
import QuoteCard from './components/QuoteCard';
import SavedQuotes from './components/SavedQuotes';
import './App.css';

function App() {
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
      const data = await response.json();
      setQuote(data[0]);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  const saveQuote = () => {
    setSavedQuotes([...savedQuotes, quote]);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="App">
      <h1>Random Quotes</h1>
      <QuoteCard quote={quote} saveQuote={saveQuote} fetchQuote={fetchQuote} />
      <SavedQuotes savedQuotes={savedQuotes} />
    </div>
  );
}

export default App;
