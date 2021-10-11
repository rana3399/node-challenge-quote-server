const { response } = require("express");

const express = require("express");
const app = express();
const quotes = require("./quotes.json");

const quoteFunc = (request, response)=> {
  response.send(`"Neill's Quote Server is running!`)
}

const jsonQuoteFunc = (req, res)=>{
res.send(quotes)
}

const randomQuoteFunc = (req, res)=>{
  res.send(pickFromArray(quotes))
}

app.get("/", quoteFunc);
app.get("/quotes", jsonQuoteFunc);
app.get("/quotes/random", randomQuoteFunc)

function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Start our server so that it listens for HTTP requests!
let port = 5000;

app.listen( port, ()=>(console.log("Server is ok, and port is " + port )));
