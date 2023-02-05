import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const eventsList = [
	{ event: "Futsal" },
	{ event: "Volleyball" },
	{ event: "Tug of war" },
	{ event: "Badminton" },
	{ event: "Basketball" },
	{ event: "Chess" },
	{ event: "Carrom" },
	{ event: "Table tennis" },
	{ event: "BGMI" },
	{ event: "Cricket" },
	{ event: "Powerlifting" },
	{ event: "Valorant" },
	{ event: "Fifa" },
];

export default function EventsSection() {
	const eventsSectionRef = useRef<HTMLElement>(null);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			gsap.to(".event-list", {
				scrollTrigger: {
					trigger: ".event-list",
					start: "top center+=20%",
					toggleActions: "restart none none reverse",
					markers: true,
				},
				backgroundColor: "rgb(140, 0, 0)",
				ease: "power4.out",
				duration: 0.7,
			});
		}, eventsSectionRef);

		return () => ctx.revert();
	}, []);

	return (
		<section ref={eventsSectionRef} className="events-section">
			<header className="h-screen w-screen flex items-center justify-center">
				<h1 className="text-center">EVENTS</h1>
			</header>
			<ul className="event-list">
				{eventsList.map((eventObj, i) => (
					<li key={i} className="container">
						{eventObj.event}
					</li>
				))}
			</ul>
		</section>
	);
}
