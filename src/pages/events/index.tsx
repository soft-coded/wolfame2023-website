import HeroSection from "./HeroSection";
import EventsSection from "./EventsSection";
import Footer from "../../components/footer";
import "./events.scss";

export default function EventsPage() {
	return (
		<div className="events-page">
			<HeroSection />
			<EventsSection />
			<Footer />
		</div>
	);
}
