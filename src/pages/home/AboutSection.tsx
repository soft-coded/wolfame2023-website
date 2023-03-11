import { useLayoutEffect, ReactNode, useRef } from "react";
import gsap from "gsap";

import scratchPng from "../../assets/scratch.png";
import { animateTitleBg } from "../../utils/functions";

function PanelDiv({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<div
			className={`panel h-screen w-full flex items-center justify-center ${
				className || ""
			}`}
		>
			{children}
		</div>
	);
}

export default function AboutSection() {
	const aboutSectionRef = useRef<HTMLElement>(null);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			const panels = gsap.utils.toArray<HTMLElement>(".about-section .panel");

			panels.forEach((panel) => {
				gsap.fromTo(
					panel,
					{
						scale: 1,
						autoAlpha: 1,
					},
					{
						scrollTrigger: {
							trigger: panel,
							start: "top top",
							pin: true,
							pinSpacing: false,
							scrub: true,
						},
						scale: 0.8,
						autoAlpha: 0,
					}
				);
			});
		}, aboutSectionRef);

		return () => ctx.revert();
	}, []);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			animateTitleBg(".about-intro .title-bg", ".about-intro");
			animateTitleBg(".about-hall-title .title-bg", ".about-hall-title");
		}, aboutSectionRef);

		return () => ctx.revert();
	}, []);

	return (
		<section ref={aboutSectionRef} className="about-section">
			<PanelDiv className="about-intro bg-gradient">
				<h3 className="heading container text-center relative">
					<div className="image-container title-bg">
						<img src={scratchPng} alt="Scratch" />
					</div>
					WHAT <span className="WOLFAME"></span> IS
				</h3>
			</PanelDiv>
			<PanelDiv className="about-wolfame background-image">
				<h5 className="container info-text text-center">
					<span className="WOLFAME"></span> is the cultural sports festival
					organised by Wolfenden Hall annually.
					<br /> The four day long event involves a plethora of activities, both
					indoor and outdoor, attended by enthusiastic students willing to prove
					their mettle.
					<br /> It is a chance for every hostel/hall to lay their claim on the
					ultimate glory - THE CHAMPION OF CHAMPIONS TROPHY. This coveted trophy
					is a symbol of sportsman spirit, excellence, and bravery, qualities
					that WOLFENDEN HALL stands for.
					<br /> This tournament is a grand celebration, full of challenges and
					fun, and is attended by thousands of people every year.
				</h5>
			</PanelDiv>
			<PanelDiv className="about-hall-title bg-gradient">
				<h3 className="heading text-center relative">
					<div className="image-container title-bg">
						<img src={scratchPng} alt="Scratch" />
					</div>
					WOLFENDEN HALL
				</h3>
			</PanelDiv>
			<PanelDiv className="about-hall background-image">
				<h5 className="container info-text text-center">
					Wolfenden Hall is a place of residence for the students of Indian
					Institute of Engineering Science and Technology, Shibpur.
					<br /> Located right in front of the Oval ground of the institute, it
					is the home to many prestigious events organised throughout the year,
					one of&nbsp; them being <span className="WOLFAME"></span>.
					<br /> Residents of Wolfenden Hall participate in and organise all of
					the activities.
					<br /> The hall is home to free-thinkers who want to prove their
					mettle in every field, be it sports, academics, music and everything
					else.
					<br /> Wolfenden Hall has a very profound alumni base spread across
					the world.
				</h5>
			</PanelDiv>
		</section>
	);
}
