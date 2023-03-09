import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollTo from "gsap/ScrollToPlugin";

import HomePage from "./pages/home";
import EventsPage from "./pages/events";
import Leaderboards from "./pages/leaderboards";
import AboutPage from "./pages/about";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollTo);

export default function App() {
	const location = useLocation();

	return (
		<AnimatePresence mode="wait">
			<Routes location={location} key={location.key}>
				<Route path="/" element={<HomePage />} />
				<Route path="/events" element={<EventsPage />} />
				<Route path="/leaderboards" element={<Leaderboards />} />
				<Route path="/about" element={<AboutPage />} />
			</Routes>
		</AnimatePresence>
	);
}
