import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Homepage from "./Homepage";
import About from "./About";
import Contact from "./Contact";
import CafeMenu from "./CafeMenu";
import CafeItemSpec from "./CafeItemSpec";

function App() {
  const [menu, setMenu] = useState([]);

	useEffect(() => {
		fetch("http://localhost:4000/inventory")
			.then((res) => res.json())
			.then((data) => setMenu(data))
			.catch((err) => console.log("Error :", err.message));
	}, []);

  function onDeleteItem(deleted){
    const updatedMenu = menu.filter(item => item.id !== deleted.id)
    setMenu(updatedMenu)
  }


	return (
		<div>
			<NavBar />
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/menu" element={<CafeMenu menu={menu}/>} />
				<Route path="/menu/:id" element={<CafeItemSpec onDeleteItem={onDeleteItem}/>} />
				<Route path="/about" element={<About />} />
				<Route path="/contacts" element={<Contact />} />
			</Routes>
		</div>
	);
}

export default App;
