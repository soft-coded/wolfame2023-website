import { useLayoutEffect, useRef, useMemo } from "react";
import gsap from "gsap";

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
	const eventsSectionRef = useRef<HTMLElement>(null);
	const eventsList = useMemo(getEventsData, []);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			const eventCards = gsap.utils.toArray<HTMLDivElement>(".event-card");
			eventCards.forEach((card) => {
				gsap.set(card, { opacity: 0, y: 100 });

				gsap.to(card, {
					y: 0,
					opacity: 1,
					ease: "power2.out",
					duration: 0.5,
					scrollTrigger: {
						trigger: card,
						start: "top top+=75%",
						toggleActions: "restart none none reverse",
					},
				});
			});
		}, eventsSectionRef);

		return () => ctx.revert();
	}, []);

	return (
		<section ref={eventsSectionRef} className="events-section pt-12 pb-12">
			<div className="container h-full overflow-hidden flex flex-col gap-12">
				{eventsList.map((event) => (
					<EventCard key={event.eventKey} {...event} />
				))}
			</div>
		</section>
	);
}
