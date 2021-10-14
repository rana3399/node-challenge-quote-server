import React, { useState } from 'react'

const Quotes =()=> {

    const [text , setText] = useState("");

    const handleClick =()=>{
        console.log("i am clicked");
        fetch("http://localhost:5000/quotes/random")
        .then((res) => res.json()).catch((error)=> {
			console.log(error);
		})
        .then((data) => {
            setText(data)
        })
    }


    const LoadQuote = () => {
    
		if (text) {
			return (
				<div className='quote-container'>
					<h2>{text.quote}</h2>
					<p>{text.author}</p>
				</div>
			);
		} else return null;
	};

	return (
		<div className = "main-container" >
	
			<LoadQuote />
			<button className='get-quote-btn' onClick={handleClick} >
				Get a random quote
			</button>
		</div>
	)
}

export default Quotes
