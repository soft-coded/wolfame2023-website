import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import slideshow1 from "../../assets/slideshow1.jpg";
// import slideshow2 from "../../assets/slideshow2.jpg";
// import slideshow3 from "../../assets/slideshow3.jpg";
// import slideshow4 from "../../assets/slideshow4.jpg";
// import slideshow5 from "../../assets/slideshow5.jpg";
// import slideshow6 from "../../assets/slideshow6.jpg";
// import slideshow7 from "../../assets/slideshow7.jpg";
// import slideshow8 from "../../assets/slideshow8.jpg";
// import slideshow9 from "../../assets/slideshow9.jpg";
// import slideshow10 from "../../assets/slideshow10.jpg";
// import slideshow11 from "../../assets/slideshow11.jpg";
// import slideshow12 from "../../assets/slideshow12.jpg";
// import slideshow13 from "../../assets/slideshow13.jpg";
// import slideshow14 from "../../assets/slideshow14.jpg";
// import slideshow15 from "../../assets/slideshow15.jpg";
// import slideshow16 from "../../assets/slideshow16.jpg";
// import slideshow17 from "../../assets/slideshow17.jpg";
// import slideshow18 from "../../assets/slideshow18.jpg";

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
			const eventList =
				eventsSectionRef.current!.querySelector<HTMLElement>(".event-list");
			const eventImage =
				eventsSectionRef.current!.querySelector<HTMLElement>(".event-image");

			// event list bg fade animation
			gsap.to(eventList, {
				scrollTrigger: {
					trigger: eventList,
					start: "top center+=20%",
					toggleActions: "restart none none reverse",
				},
				backgroundColor: "rgb(140, 0, 0)",
				ease: "power4.out",
				duration: 0.7,
			});

			// event-image pin animation
			gsap.to(".event-image", {
				scrollTrigger: {
					trigger: ".event-image",
					start: "top top+=30px",
					pin: true,
					end: `bottom+=${
						eventList!.clientHeight - eventImage!.clientHeight - 45
					}px bottom`,
				},
			});
		}, eventsSectionRef);

		return () => ctx.revert();
	}, []);

	return (
		<section ref={eventsSectionRef} className="events-section">
			<header className="h-screen w-screen flex items-center justify-center">
				<h1 className="text-center">EVENTS</h1>
			</header>
			<ul className="event-list relative">
				{eventsList.map((eventObj, i) => (
					<li key={i} className="container">
						{eventObj.event}
					</li>
				))}
				<li className="event-image image-container absolute">
					<img src={slideshow1} alt="Event" />
				</li>
			</ul>
		</section>
	);
}
