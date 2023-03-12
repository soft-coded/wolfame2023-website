import { useRef, useLayoutEffect, Fragment } from "react";
import gsap from "gsap";

import "./events.scss";
import scratchPng from "../../assets/scratch.png";
import { animateTitleBg } from "../../utils/functions";

const pointsData = [
	{
		event: "SHORT PITCH CRICKET",
		first: 100,
		second: 60,
		third: 30,
		mainEvent: true,
	},
	{ event: "TUG OF WAR", first: 100, second: 60, third: 30, mainEvent: true },
	{ event: "TABLE TENNIS", first: 100, second: 60, third: 30, mainEvent: true },
	{ event: "BADMINTON", first: 100, second: 60, third: 30, mainEvent: true },
	{ event: "FUTSAL", first: 100, second: 60, third: 30, mainEvent: true },
	{ event: "VOLLEYBALL", first: 50, second: 30, third: 15 },
	{ event: "BASKETBALL", first: 50, second: 30, third: 15 },
	{ event: "POWERLIFTING", first: 50, second: 30, third: 15 },
	{ event: "STRONG WOMAN (GIRLS ONLY)", first: 50, second: 30, third: 15 },
	{ event: "CHESS", first: 50, second: 30, third: 15 },
	{ event: "BGMI", first: 50, second: 30, third: 15 },
	{ event: "CARROM", first: 50, second: 30, third: 15 },
	{ event: "VALORANT", first: 50, second: 30, third: 15 },
	{ event: "FIFA", first: 50, second: 30, third: 15 },
];

export default function PointsSection() {
	const pointsSectionRef = useRef<HTMLElement>(null);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			const numbers = gsap.utils.toArray<HTMLElement>(".number");

			gsap.from(numbers, {
				textContent: 0,
				duration: 4,
				ease: "power3.out",
				snap: { textContent: 1 },
				stagger: 0.05,
				scrollTrigger: {
					trigger: ".table-container",
					start: "top 80%",
					end: "bottom top",
					toggleActions: "play none restart pause",
				},
			});

			animateTitleBg(".title-bg", "header");
		}, pointsSectionRef);

		return () => ctx.revert();
	}, []);

	return (
		<section ref={pointsSectionRef} className="points-section">
			<header className="h-screen w-screen flex items-center justify-center bg-gradient">
				<h3 className="text-center container relative">
					<div className="image-container title-bg">
						<img src={scratchPng} alt="Scratch" />
					</div>
					<span className="relative z-10">POINTS TABLE</span>
				</h3>
			</header>
			<div className="wrapper background-image my-12">
				<div className="container table-container grid">
					<span className="font-extrabold">SR.</span>
					<span className="font-extrabold">EVENT</span>
					<span className="font-extrabold">1ST</span>
					<span className="font-extrabold">2ND</span>
					<span className="font-extrabold">3RD</span>
					{pointsData.map((point, i) => (
						<Fragment key={i}>
							<span
								className={`serial ${point.mainEvent ? "font-semibold" : ""}`}
							>
								{i + 1}
							</span>
							<span
								className={`event-name ${
									point.mainEvent ? "font-semibold" : ""
								}`}
							>
								{point.event}
							</span>
							<span
								className={`event-first number ${
									point.mainEvent ? "font-semibold" : ""
								}`}
							>
								{point.first}
							</span>
							<span
								className={`event-second number ${
									point.mainEvent ? "font-semibold" : ""
								}`}
							>
								{point.second}
							</span>
							<span
								className={`event-third number ${
									point.mainEvent ? "font-semibold" : ""
								}`}
							>
								{point.third}
							</span>
						</Fragment>
					))}
				</div>
			</div>
		</section>
	);
}
