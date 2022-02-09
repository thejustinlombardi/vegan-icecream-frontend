import React from "react";
import { Link } from "react-router-dom";

function Navigation(props) {
	return (
		<div>
			<Link to="/home">
				<h1>Vegan Ice Cream Finder</h1>
			</Link>
			<Link to="/home/create">
				<h2>Create a post</h2>
			</Link>
		</div>
	);
}

export default Navigation;
