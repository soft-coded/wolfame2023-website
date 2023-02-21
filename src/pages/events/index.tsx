import HeroSection from "./HeroSection";
import EventsSection from "./EventsSection";
import Page from "../../components/page/Page";
import "./events.scss";

export default function EventsPage() {
	return (
		<Page>
			<div className="events-page">
				<HeroSection />
				<EventsSection />
			</div>
		</Page>
	);
}
