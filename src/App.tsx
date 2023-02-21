import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import HomePage from "./pages/home";
import EventsPage from "./pages/events";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
	const { pathname } = useLocation();
	useEffect(() => {
		// reset scroll on load, need setTimeout because synchronous call might fail
		setTimeout(() => {
			window.scrollTo(0, 0);
		}, 0);
	}, [pathname]);

	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/events" element={<EventsPage />}></Route>
		</Routes>
	);
}
