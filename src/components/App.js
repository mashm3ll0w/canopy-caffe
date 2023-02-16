import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Homepage from "./Homepage";
import About from "./About";
import Contact from "./Contact";
import CafeMenu from "./CafeMenu";
import CafeItemSpec from "./CafeItemSpec";

function App() {
	return (
		<div>
			<NavBar />
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/menu" element={<CafeMenu />} />
				<Route path="/menu/:id" element={<CafeItemSpec />} />
				<Route path="/about" element={<About />} />
				<Route path="/contacts" element={<Contact />} />
			</Routes>
		</div>
	);
}

export default App;
