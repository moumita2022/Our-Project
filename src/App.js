import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

export default function App() {
	return (
		<div className="App">
			{/* <h1>The Foodie Express</h1> */}
			<Navbar />
			<div className="container main">
				<HeroSection />
			</div>
		</div>
	);
}
