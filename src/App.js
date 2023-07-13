import "./App.css";
import Login from "./Components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar2 from "./Components/navbar2";
import Home from "./Components/Home";
import Register from "./Components/Register";
import HomePage from "./Components/Homepage";
import Sidebar from "./Components/sidebar";
import React from "react";

function App() {
	return (
		<BrowserRouter>
			 <Navbar2 />
			 <Sidebar/>
		{/* <HomePage/> */}
			<Routes>
		 		<Route path="/" element={<Home />} />
		 		<Route path="/login" element={<Login />} />
		 		<Route path="/register" element={<Register />} />
		 	</Routes>
		 </BrowserRouter>
	// 	<div className="App">
	// 		<div>
    //              <h1>tailwindcss</h1>
	// 		</div>
	// 	</div>
	);
}

export default App;
