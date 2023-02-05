import { useLayoutEffect } from "react";
import { Routes, Route } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import HomePage from "./pages/home";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
	useLayoutEffect(() => {
		// reset scroll on reload
		window.scrollTo(0, 0);
	}, []);

	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
		</Routes>
	);
}
