import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

import "./events.scss";
import scratchPng from "../../assets/scratch.png";
import { animateTitleBg } from "../../utils/functions";

export default function PointsSection() {
	const pointsSectionRef = useRef<HTMLElement>(null);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
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
		</section>
	);
}
