import { useEffect } from "react";
import gsap from "gsap";

import "./index.scss";
import scratchPng from "../../assets/scratch.png";
import { animateTitleBg } from "../../utils/functions";

type HeaderProps = {
	children: React.ReactNode;
	className?: string;
	sectionRef: React.MutableRefObject<HTMLElement | null>;
	animationClasses?: [string, string];
};

export default function SectionHeader({
	children,
	className,
	sectionRef,
	animationClasses,
}: HeaderProps) {
	useEffect(() => {
		const ctx = gsap.context(() => {
			if (animationClasses) {
				animateTitleBg(animationClasses[0], animationClasses[1]);
			} else {
				animateTitleBg(".title-bg", "header");
			}
		}, sectionRef);

		return () => ctx.revert();
	}, [sectionRef, animationClasses]);

	return (
		<header
			className={`h-screen w-screen bg-gradient flex items-center justify-center ${
				className ?? ""
			}`}
		>
			<h3 className="text-center container relative">
				<div className="image-container title-bg">
					<img src={scratchPng} alt="scratch" />
				</div>
				<span className="relative z-10">{children}</span>
			</h3>
		</header>
	);
}
