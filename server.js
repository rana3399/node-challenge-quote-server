const { response } = require("express");
const cors = require("cors");

// before routes definition

const express = require("express");
const app = express();
app.use(cors()); // 

const quotes = require("./quotes.json");

const quoteFunc = (request, response)=> {
  response.send("Quote Server is running!");
}

const jsonQuoteFunc = (req, res)=>{
res.send(quotes);
}


const randomQuoteFunc = (req, res)=>{
  res.send(pickFromArray(quotes));
}

function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// SEARCH FUNCTIONS- - -- -(not working on DOM)

const getAllQuotes = (request, response) => {

  const search = request.query.author ? request.query.author.toLowerCase() : null
  //const quotesWord = request.query.quote  ? request.query.quote.toLowerCase() : null

  console.log(quotes);
  let filteredQuotes = quotes.filter((quote) => 
    
    quote.author.toLowerCase().includes(search) 
    // ||  quote.quote.toLowerCase().includes(quotesWord)
  
  )

  response.json(filteredQuotes);

}

app.get("/", quoteFunc);
app.get("/quotes", jsonQuoteFunc);
app.get("/quotes/random", randomQuoteFunc);

app.get("/quotes/author", getAllQuotes);

//Start our server so that it listens for HTTP requests!
let port = 5000;

app.listen( port, ()=>(console.log("Server is ok, and port is " + port )));
