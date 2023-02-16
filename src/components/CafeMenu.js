import React, { useState, useEffect } from "react";
import CafeItem from "./CafeItem";

export default function CafeMenu() {
	const [items, setItems] = useState([]);

	useEffect(() => {
		fetch("http://localhost:4000/inventory")
			.then((res) => res.json())
			.then((data) => setItems(data))
			.catch((err) => console.log("Error :", err.message));
	}, []);

	return (
		<div className="menu-container container-fluid">
			{items.map((item) => (
				<CafeItem key={item.id} item={item} />
			))}
		</div>
	);
}
