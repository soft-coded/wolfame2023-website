import { EventType } from "./events-data";

export default function EventCard(props: EventType) {
	return (
		<div className="event-card flex flex-col gap-6">
			<h2>{props.name}</h2>
			<ul>
				{props.rules.map((rule, i) => (
					<li key={i} dangerouslySetInnerHTML={{ __html: rule }} />
				))}
			</ul>
		</div>
	);
}
