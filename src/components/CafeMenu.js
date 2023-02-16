import React, { useState, useEffect } from "react";
import CafeItem from "./CafeItem";

export default function CafeMenu() {
	const [menu, setMenu] = useState([]);

	useEffect(() => {
		fetch("http://localhost:4000/inventory")
			.then((res) => res.json())
			.then((data) => setMenu(data))
			.catch((err) => console.log("Error :", err.message));
	}, []);

	return (
		<div className="menu-container container-fluid">
			{menu.map((item) => (
				<CafeItem key={item.id} item={item} />
			))}
		</div>
	);
}
