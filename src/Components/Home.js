import React from "react";
import webuilder from "./image/airplane.avif";
import "./Home.css";
import Book from "./Book";
import Stay from "./stay";

function Home() {
	return (
		<>
		<div className="content home">
			<div className="card-split">
				<div className="card home homeText ">
					<div className="homet1">
				<h1>DISCOVER YOUR DREAM <span id="homeword">DESTINATION</span></h1>
					<h3>To get the best of your adventure you just need to leave and go where you like,we are waiting for you</h3>
					</div>
					
					<a href="/login" className="link-button ">
						<button className="book">Book Tickets</button>
					</a>
					</div>
			
				<div className="card home">
					<img src={webuilder} alt="fitness" height={400} />
				</div>
			</div>
		</div>
		<Book/>
		<Stay/>
		</>
		
	);
}

export default Home;
