import React from "react";
import { useParams } from "react-router-dom";

function IceCreamResults({ iceCream }) {
	const { id } = useParams();

	return (
		<div className="main-icecream">
			<img src={iceCream[id].photo_url} alt="" />
			<h1>{iceCream[id].brand}</h1>
			<h2>{iceCream[id].alternatives}</h2>
			<h3>{iceCream[id].location}</h3>
			<a
				href={iceCream[id].site}
				className="ice-site"
				target="_blank"
				rel="noreferrer">
				Visit {iceCream[id].brand} here!{" "}
			</a>
		</div>
	);
}

export default IceCreamResults;
