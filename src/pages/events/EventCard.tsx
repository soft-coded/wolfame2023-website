import { EventType } from "./events-data";

export default function EventCard(props: EventType) {
	return (
		<div className="event-card">
			<h2>{props.name}</h2>
			<ul>
				{props.rules.map((rule, i) => (
					<li key={i}>{rule}</li>
				))}
			</ul>
		</div>
	);
}
