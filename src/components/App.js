import React from "react";
import {Routes, Route} from "react-router-dom"
import Homepage from "./Homepage"
import About from "./About";
import Contact from "./Contact";
import CafeMenu from "./CafeMenu";

function App() {
	return (
		<div>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/menu" element={<CafeMenu />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contacts" element={<Contact />}/>
      </Routes>
		</div>
	);
}

export default App;
