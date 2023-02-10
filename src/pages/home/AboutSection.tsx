import { useLayoutEffect, ReactNode, useRef } from "react";
import gsap from "gsap";

// import PawSvg from "../../svg/paw";
import scratchPng from "../../assets/scratch.png";
import { animateTitleBg } from "../../utils";

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
				<h1 className="heading text-center relative">
					{/* <PawSvg className="paw" /> */}
					<div className="image-container title-bg">
						<img src={scratchPng} alt="Scratch" />
					</div>
					WHAT IS <span className="WOLFAME"></span>?
				</h1>
			</PanelDiv>
			<PanelDiv className="about-wolfame background-image">
				<div className="container text-center">
					<span className="WOLFAME"></span> is the cultural sports festival
					organised by Wolfenden Hall annually.
					<br /> The three day long event involves a plethora of activities,
					both indoor and outdoor, attended by enthusiastic students willing to
					prove their mettle.
					<br /> After 4 years, the much anticipated festival has returned to
					reignite the spark of competition among the students and will be
					witnessed by an approximate of 10,000 people.
				</div>
			</PanelDiv>
			<PanelDiv className="about-hall-title bg-gradient">
				<h1 className="heading text-center relative">
					<div className="image-container title-bg">
						<img src={scratchPng} alt="Scratch" />
					</div>
					WOLFENDEN HALL
				</h1>
			</PanelDiv>
			<PanelDiv className="about-hall background-image">
				<div className="container text-center">
					Wolfenden Hall is a place of residence for the students of Indian
					Institute of Engineering Science and Technology, Shibpur. <br />
					Located right in front of the Oval ground of the institute, it is the
					home to many prestigious events organised throughout the year, one
					of&nbsp;
					{/* them being <span className="wolfame">WOLFAME</span>.<br /> Residents */}
					them being <span className="WOLFAME"></span>.<br /> Residents of
					Wolfenden Hall participate in and organise all of the activities in
					the institute.
				</div>
			</PanelDiv>
		</section>
	);
}
