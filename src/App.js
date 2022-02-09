import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import axios from "axios";

import Welcome from "./components/Welcome/Welcome";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import IceCreamResults from "./components/IceCream/IceCreamResults";
import Create from "./components/Create/Create";

import "./App.css";

function App() {
	const { pathname } = useLocation();

	const [iceCream, setIceCream] = useState([]);

	useEffect(() => {
		getIceCream();
	}, []);

	const getIceCream = async () => {
		try {
			const res = await axios.get(
				"https://vegan-icecream-locator.herokuapp.com/api/icecreams/"
			);
			setIceCream(res.data);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="app-container">
			{pathname !== "/" && <Navigation />}
			<Routes>
				<Route path="/" element={<Welcome iceCream={iceCream} />} />
				<Route path="/home" element={<Home iceCream={iceCream} />} />
				<Route
					path="/home/:id"
					element={<IceCreamResults iceCream={iceCream} />}
				/>
				<Route path="/home/create" element={<Create />} />
			</Routes>
		</div>
	);
}

export default App;
