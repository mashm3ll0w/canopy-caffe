import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Homepage from "./Homepage";
import About from "./About";
import Contacts from "./Contacts";
import CafeMenu from "./CafeMenu";
import CafeItemSpec from "./CafeItemSpec";
import Cart from "./Cart";
import NewCafeItem from "./NewCafeItem";

function App() {
	const [menu, setMenu] = useState([]);
	const [cart, setCart] = useState([]);
	const [filter, setFilter] = useState("");

	useEffect(() => {
		fetch("https://movcon-app-api.onrender.com/caffe")
			.then((res) => res.json())
			.then((data) => setMenu(data))
			.catch((err) => console.log("Error :", err.message));
	}, []);

	function onDeleteItem(deleted) {
		const updatedMenu = menu.filter((item) => item.id !== deleted.id);
		setMenu(updatedMenu);
	}

	function onAddToCart(toAdd) {
		setCart([...cart, toAdd]);
	}

	function onRemoveFromCart(removed) {
		const updatedCart = cart.filter((item) => item.id !== removed.id);
		setCart(updatedCart);
	}

	function handleSearch(event) {
		setFilter(event.target.value);
		//console.log(event)
	}

	function onAddToMenu(menuItem) {
		setMenu([...menu, menuItem]);
	}

	return (
		<div>
			<NavBar itemsInCart={cart.length} />
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/menu" element={<CafeMenu menu={menu} filter={filter} handleSearch={handleSearch} />} />
				<Route path="/menu/new" element={<NewCafeItem onAddToMenu={onAddToMenu} />} />
				<Route path="/menu/:id" element={<CafeItemSpec onAddToCart={onAddToCart} onDeleteItem={onDeleteItem} />} />
				<Route path="/cart" element={<Cart cart={cart} onRemoveFromCart={onRemoveFromCart} />} />
				<Route path="/about" element={<About />} />
				<Route path="/contacts" element={<Contacts />} />
			</Routes>
		</div>
	);
}

export default App;
