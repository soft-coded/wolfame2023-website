import eventsData from "./events-data";
import EventCard from "./EventCard";

function getEventsData() {
	let eventsDataList = [];

	for (let event in eventsData) {
		eventsDataList.push(eventsData[event]);
	}

	return eventsDataList;
}

export default function EventsSection() {
	return (
		<section className="events-section">
			<div className="container">
				{getEventsData().map((event, i) => (
					<EventCard key={i} {...event} />
				))}
			</div>
		</section>
	);
}
