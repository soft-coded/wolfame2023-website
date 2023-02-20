import { EventType } from "./events-data";

export default function EventCard(props: EventType) {
	return (
		<div
			id={props.eventKey}
			className="event-card"
			style={{
				backgroundImage: `url(${props.photo})`,
				backgroundPosition: "center center",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
			}}
		>
			<div className="content flex flex-col gap-6">
				<h2>{props.name}</h2>
				<ul className="flex flex-col gap-4">
					{props.rules.map((rule, i) => (
						<li key={i} dangerouslySetInnerHTML={{ __html: rule }} />
					))}
				</ul>
			</div>
		</div>
	);
}
