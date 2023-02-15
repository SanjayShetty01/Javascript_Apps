//import "jsdom";

var jsdom = require("jsdom");
var JSDOM = jsdom.JSDOM;


let quotesDiv = JSDOM.document.getElementById('quotes').innerHTML

fetch('https://api.kanye.rest')
.then(res => res.json())
.then(quote => {
    quotesDiv.innerHTML += `<p> ${quote.quote}</p>`
})


