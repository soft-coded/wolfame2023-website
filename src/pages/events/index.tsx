import HeroSection from "./HeroSection";
import EventsSection from "./EventsSection";
import "./events.scss";

export default function EventsPage() {
	return (
		<div className="events-page">
			<HeroSection />
			<EventsSection />
		</div>
	);
}
