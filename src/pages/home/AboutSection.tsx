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
	/* useLayoutEffect(() => {
		gsap.fromTo(
			".about-section",
			{
				background:
					"linear-gradient(0deg, #000, var(--clr-primary-dark), #000)",
			},
			{
				background:
					"linear-gradient(360deg, #000, var(--clr-primary-dark), #000)",
				scrollTrigger: {
					trigger: ".about-section",
					start: "top top",
					end: "bottom bottom",
					scrub: true,
				},
			}
		);
	}, []); */

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			const panels = gsap.utils.toArray<HTMLElement>(".about-section .panel");

			panels.forEach((panel) => {
				gsap.to(panel, {
					scrollTrigger: {
						trigger: panel,
						start: "top top",
						end: "bottom top",
						pin: true,
						markers: true,
						pinSpacing: false,
					},
				});
			});
		}, aboutSectionRef);

		return () => ctx.revert();
	}, []);

	return (
		<section ref={aboutSectionRef} className="about-section h-screen">
			<PanelDiv className="bg-slate-200">
				<h1 className="heading text-center">WHAT IS WOLFAME?</h1>
			</PanelDiv>
			<PanelDiv className="bg-slate-400">
				<h1 className="heading text-center">ONE</h1>
			</PanelDiv>
			<PanelDiv className="bg-slate-600">
				<h1 className="heading text-center">TWO</h1>
			</PanelDiv>
			<PanelDiv className="bg-slate-800">
				<h1 className="heading text-center">THREE</h1>
			</PanelDiv>
			<PanelDiv className="bg-slate-900">
				<h1 className="heading text-center">FOUR</h1>
			</PanelDiv>
		</section>
	);
}
