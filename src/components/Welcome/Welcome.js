import React from "react";
import { Link } from "react-router-dom";

function Welcome({ iceCream }) {
	return (
		<div className="welcome-container">
			<h1>Vegan Ice Cream Finder</h1>

			<div className="cone">
				<img src="https://i.imgur.com/RkF1akI.png" alt="" />
			</div>
			<Link to="/home">
				<h2 className="enter-here">Enter Here!</h2>
			</Link>
		</div>
	);
}

export default Welcome;
