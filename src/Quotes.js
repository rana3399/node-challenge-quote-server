import React, { useState } from 'react'
//import AllQuotes from '../../quotes';

const Quotes =()=> {
    const [text, setText] = useState();

   function fetchFunc() {
    fetch("http://localhost:5000/quotes/random")
    .then((res) => res.json())
    .then((data)=>{
        setText(data)
    })
   
    }
    // -------------------------

    //let result = AllQuotes
    //console.log(result);

    return(
    <div className="quote-container">
        <div className="main-quote">
            <h2>Life is Beautiful {text} </h2>
            <p>Author</p>
        </div>

        <div className="my-btn"  >
        <button onClick={fetchFunc} >New Quotes</button>
        </div>
        
    </div>
    )

}

export default Quotes
