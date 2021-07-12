import React, { useState, useEffect } from "react";
import "./App.scss";
import QuoteBox from "./components/QuoteBox";

function App() {
  const [quote, setQuote] = useState({});

  const getQuote = async () => {
    const response = await fetch(
			"https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/random"
		);
    const data = await response.json();
    setQuote(data[0]);
  }
  
  useEffect(() => {
    getQuote();
  }, [])

	return (
		<div className="app">
      <QuoteBox className="quote-box" quote={quote.q} author={quote.a} getQuote={getQuote} />
		</div>
	);
}

export default App;
