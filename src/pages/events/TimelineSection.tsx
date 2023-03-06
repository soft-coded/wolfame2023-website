import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

import "./events.scss";
import { animateTitleBg, scrollSnapAnim } from "../../utils/functions";
import scratchPng from "../../assets/scratch.png";

export default function TimelineSection() {
	const timelineSectionRef = useRef<HTMLElement>(null);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			scrollSnapAnim(".timepoint");
			/* ScrollTrigger.create({
				trigger: ".timepoints-container",
				start: "top bottom",
				markers: true,
				snap: {
					snapTo: 1 / timepoints.length,
					delay: 0,
					duration: 1,
				},
				end: "bottom bottom",
			}); */

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
				<div className="timepoint background-image timepoint-1">
					Timepoint 1
				</div>
				<div className="timepoint background-image timepoint-2">
					Timepoint 2
				</div>
				<div className="timepoint background-image timepoint-3">
					Timepoint 3
				</div>
				<div className="timepoint background-image timepoint-4">
					Timepoint 4
				</div>
			</div>
		</section>
	);
}
