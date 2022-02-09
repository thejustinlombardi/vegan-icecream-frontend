import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function IceCreamResults({ iceCream, setIceCream }) {
	const { id } = useParams();

	const { navigate } = useNavigate();

	// Function to send DELETE request to the api using the id
	const handleDelete = async () => {
		try {
			// DELETE request to api
			const res = await axios.delete(
				`https://vegan-icecream-locator.herokuapp.com/api/icecreams/${id}`
			);
			// set variable for the response data
			const data = res.data;
			// create temp array to copy old posts
			let tempArr = [...iceCream];
			// find the index of the deleted post
			const tempIndex = tempArr.findIndex(
				(iceCream) => iceCream._id === data._id
			);
			// update the posts state with the new temp array to update the page
			tempArr.splice(tempIndex, 1);
			setIceCream(tempArr);
			navigate("/home");
		} catch (error) {
			console.log(error);
		}
	};
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
			<button
				onClick={() => {
					handleDelete();
				}}>
				Delete
			</button>
		</div>
	);
}

export default IceCreamResults;
