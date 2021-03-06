document.getElementById('loadQuote').addEventListener("click", printQuote, false);
var message = '';
var red;
var green;
var blue;
var viewedQuotes =[];

var quotes = [
	{
		quote: "The only thing to fear is fear itself.",
		source: "Franklin Delano Roosevelt",
		citation: "First Inaugural Address",
		year: 1932,

	},
	{
		quote: "That's one small step for man, one giant leap for mankind.",
		source: "Neil Armstrong",
		citation: "The moon",
		year: 1969
	},
	{
		quote: "It always seems impossible until it is done.",
		source: "Nelson Mandela",
		citation: "",
		year: "1918 - 2013"
	},
	{
		quote: "Not everything that can be counted counts, and not everything that counts can be counted.",
		source: "Albert Einstein",
		citation: "",
		year: "1879 - 1955"
	},
	{
		quote: "What we think, we become",
		source: "Buddha",
		citation: "",
		year: ""
	},
	{
		quote: "Dream big and dare to fail",
		source: "Norman Vaughan",
		citation: "",
		year: "1905 - 2005"
	},
];

function print(quote) {
	var outputDiv = document.getElementById('quote-box');
	outputDiv.innerHTML = quote;
}
function getRandomQuote() {
	var randomQuote = Math.floor(Math.random() * quotes.length);
	
	var splicedQuote = quotes.splice(randomQuote, 1)[0];
	viewedQuotes.push(splicedQuote);
	if ( quotes.length === 0 ) {
		quotes = viewedQuotes;
		viewedQuotes = [];
	}
	return splicedQuote;
}

function randomColorGenerator() {
	var randomColor;
	red = Math.floor(Math.random() * 256 );
	green = Math.floor(Math.random() * 256 );
	blue = Math.floor(Math.random() * 256 );
	randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	return randomColor;
}

function printQuote() {
	var quotes = getRandomQuote();
	message ='<p class="quote">' + quotes.quote + '</p>';
	message  += '<p class="source">' + quotes.source;
	if ( quotes.citation ) {
		message += '<span class="citation">' + quotes.citation + '</span>';
	} else {
		message += '';
	}
	if (quotes.year) {
		message += '<span class="year">' + quotes.year + '</span></p>';	
	} else {
		message += '';
	}
	if ( quotes.tags ) {
		message += '<h3>' + quotes.tags + '</h3>';
	} else {
		message += '';
	}
	print(message);
	randomColorGenerator();
	document.getElementById('bgcolor').style.backgroundColor = randomColorGenerator();
}
