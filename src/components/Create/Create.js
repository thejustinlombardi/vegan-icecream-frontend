import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Create(props) {
	const navigate = useNavigate();

	const [newPost, setNewPost] = useState({
		brand: "",
		location: "",
		alternatives: "",
		photo_url: "",
		site: "",
	});

	// handle change function to keep track of user input
	const handleChange = (e) => {
		// sets newPost key values with what the user inputs
		if (e.target.id === "name") {
			let temp = { ...newPost };
			temp.user.name = e.target.value;
			setNewPost(temp);
		} else {
			setNewPost({ ...newPost, [e.target.id]: e.target.value });
		}
	};

	// submit function for axios post request
	const handleSubmit = (e) => {
		// prevent default to not refresh the page
		e.preventDefault();
		sendPost();
	};

	const sendPost = async () => {
		try {
			// comment this line back in when connecting to backend
			await axios({
				url: "https://vegan-icecream-locator.herokuapp.com/api/icecreams/",
				method: "POST",
				data: newPost,
			});
			navigate("/home");
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="brand">Brand:</label>
				<input onChange={handleChange} id="brand" value={newPost.brand} />
				<label htmlFor="location">Location:</label>
				<input onChange={handleChange} id="location" value={newPost.location} />
				<label htmlFor="alternatives">Alternatives:</label>
				<input
					onChange={handleChange}
					id="alternatives"
					value={newPost.alternatives}
				/>
				<label htmlFor="photo_url">Photo URL:</label>
				<input
					onChange={handleChange}
					id="photo_url"
					value={newPost.photo_url}
				/>
				<label htmlFor="site">Site:</label>
				<input onChange={handleChange} id="site" value={newPost.site} />

				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default Create;
