import React from "react";
import { Link } from "react-router-dom";

function Home({ iceCream }) {
	return (
		<div className="home-container">
			{iceCream.map((ice, i) => {
				// add more user info like city, years of residence, etc
				return (
					<Link to={`/home/${ice.id}`} key={`${ice.brand}-${i}`}>
						<img src={ice.photo_url} alt={ice.brand} />
					</Link>
				);
			})}
		</div>
	);
}

export default Home;
