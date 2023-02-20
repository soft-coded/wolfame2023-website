import eventsData from "./events-data";
import EventCard from "./EventCard";

function getEventsData() {
	let eventsDataList = [];

	for (let event in eventsData) {
		eventsData[event].eventKey = event;
		eventsDataList.push(eventsData[event]);
	}

	return eventsDataList;
}

export default function EventsSection() {
	return (
		<section className="events-section pt-12 pb-12">
			<div className="container flex flex-col gap-12">
				{getEventsData().map((event) => (
					<EventCard key={event.eventKey} {...event} />
				))}
			</div>
		</section>
	);
}
