import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

import "./events.scss";
import { animateTitleBg, scrollSnapAnim } from "../../utils/functions";
import scratchPng from "../../assets/scratch.png";

const timepoints = [
	{
		title: "INAUGURATION DAY",
		date: "15/03/2023",
		events: ["INITIATION", "INAUGURATION CEREMONY", "FRIENDLY MATCHES"],
	},
	{
		title: "FIRST DAY",
		date: "16/03/2023",
		events: [
			"HUSTLE BEGINS",
			"ROUND ONE MATCHES",
			"LEAGUE AND KNOCKOUT STAGES",
		],
	},
	{
		title: "SECOND DAY",
		date: "17/03/2023",
		events: [
			"MATCHES PROCEED TO THE NEXT ROUND",
			"MORE INTENSE ACTION",
			"QUARTER AND SEMI FINALS",
		],
	},
	{
		title: "THIRD DAY",
		date: "18/03/2023",
		events: [
			"FINALE GRIND",
			"AWARD CEREMONY",
			"DECLARATION OF CHAMPION OF CHAMPIONS",
		],
	},
	{
		title: "CULTURAL DAY",
		date: "19/03/2023",
		events: ["CULTURAL NIGHT", "DANCE PARTY", "UNLIMITED FUN"],
	},
];

export default function TimelineSection() {
	const timelineSectionRef = useRef<HTMLElement>(null);

	useLayoutEffect(() => {
		window.scrollTo(0, 0);

		const ctx = gsap.context(() => {
			scrollSnapAnim(".timepoint");

			const timepointNodes = gsap.utils.toArray<HTMLDivElement>(".timepoint");
			timepointNodes.forEach((node) => {
				const childNodes = node.querySelectorAll(".container > *");

				gsap.set(childNodes, {
					y: 50,
					opacity: 0,
				});

				gsap.to(childNodes, {
					scrollTrigger: {
						trigger: node,
						start: "top top+=10%",
						end: "bottom top+=10%",
						toggleActions: "restart none none reverse",
					},
					y: 0,
					opacity: 1,
					stagger: 0.2,
					ease: "power3",
				});
			});

			animateTitleBg(".title-bg", "header");
		}, timelineSectionRef);

		return () => ctx.revert();
	}, []);

	return (
		<section ref={timelineSectionRef} className="timeline-section">
			<header className="h-screen w-screen flex items-center justify-center bg-gradient">
				<h3 className="text-center relative">
					<div className="image-container title-bg">
						<img src={scratchPng} alt="Scratch" />
					</div>
					<span className="relative z-10">TIMELINE</span>
				</h3>
			</header>
			<div className="timepoints-container">
				{timepoints.map((timepoint, i) => (
					<div
						key={i}
						className={`timepoint background-image timepoint-${i} overflow-hidden`}
					>
						<div className="container flex flex-col items-center justify-center gap-4 h-full overflow-hidden">
							<h4 className="text-center">{timepoint.title}</h4>
							<h5 className="text-center font-semibold">{timepoint.date}</h5>
							<ul className="flex flex-col mt-2 gap-2">
								{timepoint.events.map((event, j) => (
									<li key={i + j} className="text-center">
										- {event}
									</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
