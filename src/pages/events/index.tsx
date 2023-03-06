import HeroSection from "./HeroSection";
import TimelineSection from "./TimelineSection";
import EventsSection from "./EventsSection";
import Page from "../../components/page/Page";
import "./events.scss";

export default function EventsPage() {
	return (
		<Page>
			<div className="events-page">
				<HeroSection />
				<TimelineSection />
				<EventsSection />
			</div>
		</Page>
	);
}
