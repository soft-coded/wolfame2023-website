import { useLayoutEffect, ReactNode, useRef } from "react";
import gsap from "gsap";

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

	return (
		<section ref={aboutSectionRef} className="about-section h-screen">
			<PanelDiv className="about-intro">
				<h1 className="heading text-center">
					WHAT IS <span className="wolfame">WOLFAME</span>?
				</h1>
			</PanelDiv>
			<PanelDiv className="about-description background-image">
				<div className="container text-center">
					<span className="wolfame">WOLFAME</span> is the cultural sports
					festival organised by Wolfenden Hall annually.
					<br /> The three day long event involves a plethora of activities,
					both indoor and outdoor, attended by enthusiastic students willing to
					prove their mettle.
					<br /> After 4 years, the much anticipated festival has returned to
					reignite the spark of competition among the students and will be
					witnessed by an approximate of 10,000 people.
				</div>
			</PanelDiv>
			<PanelDiv>
				<h1 className="heading text-center">TWO</h1>
			</PanelDiv>
			<PanelDiv>
				<h1 className="heading text-center">THREE</h1>
			</PanelDiv>
			<PanelDiv>
				<h1 className="heading text-center">FOUR</h1>
			</PanelDiv>
		</section>
	);
}
