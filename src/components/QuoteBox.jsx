import React from "react";

import "./QuoteBox.scss";

const QuoteBox = ({quote, author, getQuote}) => {
  return (
		<div id="quote-box">
			<h2 id="text">{quote}</h2>
			<h4 id="author">{author}</h4>
			<button id="new-quote" onClick={getQuote}>
				New quote
			</button>
			<a href="https://twitter.com/intent/tweet" id="tweet-quote" target="_blank">
				Tweet Quote
			</a>
		</div>
	);
}
 
export default QuoteBox;