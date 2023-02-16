import React from "react";
import {Routes, Route} from "react-router-dom"
import Homepage from "./Homepage"
import About from "./About";

function App() {
	return (
		<div>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
		</div>
	);
}

export default App;
