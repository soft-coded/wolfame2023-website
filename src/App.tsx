// import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import HomePage from "./pages/home";
import EventsPage from "./pages/events";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
	// reset scroll on load
	window.scrollTo(0, 0);

	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/events" element={<EventsPage />}></Route>
		</Routes>
	);
}
