import React, { useState } from 'react'

const Quotes =()=> {

    const [text , setText] = useState( {
		"quote": "Whatever the mind of man can conceive and believe, it can achieve.",
		"author": "Napoleon"
	  });

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

	const handleSearch=()=>{
		console.log("search button clicked.");
		
		fetch("http://localhost:5000/quotes/author?author=Napoleon")
		.then((res)=> res.json()).catch((error)=>{
			console.log(error);
		})
		.then((data) => {
			console.log(data);
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
		<>
		<main>
			<div className="container">


				<div className = "main-container" >
				<h1>Top famous qoutes with Author</h1>
					<LoadQuote />
					<button className='get-quote-btn' onClick={handleClick} >
						Get a random quote
					</button>
				</div>

				<div className="search-container">
				<input type="text" placeholder="Write an Author name"/>
				<button className='get-quote-btn' onClick={handleSearch} >
					Get quote by Author
				</button>
				</div>

			</div>
		</main>
	</>
	)
}

export default Quotes
