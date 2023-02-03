import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import wolfPng from "../../assets/wolf.png";
import slideshow1 from "../../assets/slideshow1.jpg";
import slideshow2 from "../../assets/slideshow2.jpg";
import slideshow3 from "../../assets/slideshow3.jpg";
import slideshow4 from "../../assets/slideshow4.jpg";
import slideshow5 from "../../assets/slideshow5.jpg";
import slideshow6 from "../../assets/slideshow6.jpg";
import slideshow7 from "../../assets/slideshow7.jpg";
import slideshow8 from "../../assets/slideshow8.jpg";
import slideshow9 from "../../assets/slideshow9.jpg";
import slideshow10 from "../../assets/slideshow10.jpg";
import slideshow11 from "../../assets/slideshow11.jpg";
import slideshow12 from "../../assets/slideshow12.jpg";
import slideshow13 from "../../assets/slideshow13.jpg";
import slideshow14 from "../../assets/slideshow14.jpg";
import slideshow15 from "../../assets/slideshow15.jpg";
import slideshow16 from "../../assets/slideshow16.jpg";
import slideshow17 from "../../assets/slideshow17.jpg";
import slideshow18 from "../../assets/slideshow18.jpg";

const topSlideshow = [
	slideshow1,
	slideshow2,
	slideshow3,
	slideshow4,
	slideshow5,
	slideshow6,
	slideshow7,
	slideshow8,
	slideshow9,
];

const bottomSlideshow = [
	slideshow10,
	slideshow11,
	slideshow12,
	slideshow13,
	slideshow14,
	slideshow15,
	slideshow16,
	slideshow17,
	slideshow18,
];

function imageTilt(e: MouseEvent) {
	const { offsetX, offsetY, target } = e;
	const { clientHeight, clientWidth } = target as HTMLElement;
	const xPos = offsetX / clientWidth - 0.5;
	const yPos = offsetY / clientHeight - 0.5;
	gsap.to(".logo", {
		duration: 0.5,
		x: xPos * 20,
		y: yPos * 30,
		rotationX: -yPos * 30,
		rotationY: xPos * 30,
		ease: "power4.out",
	});
}

export default function HeroSection() {
	const heroSectionRef = useRef<HTMLElement>(null);

	useLayoutEffect(() => {
		if (!heroSectionRef.current) return;
		const heroSection = heroSectionRef.current;

		const ctx = gsap.context(() => {
			heroSection.addEventListener("mousemove", imageTilt);
		}, heroSectionRef);

		return () => {
			ctx.revert();
			heroSection.removeEventListener("mousemove", imageTilt);
		};
	}, []);

	return (
		<section
			ref={heroSectionRef}
			className="hero-section w-screen h-screen relative flex overflow-hidden"
		>
			<div className="slideshow slideshow-top h-1/2 pointer-events-none">
				{topSlideshow.map((slide, i) => (
					<div className="image-container" key={i}>
						<img src={slide} alt="wolfame img" />
					</div>
				))}
				{topSlideshow.map((slide, i) => (
					<div className="image-container" key={i}>
						<img src={slide} alt="wolfame img" />
					</div>
				))}
			</div>
			<div className="image-container logo self-center m-auto pointer-events-none">
				<img src={wolfPng} alt="Wolfame logo" />
			</div>
			<h1 className="title absolute top-1/2 left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
				WOLFAME
			</h1>
			<div className="slideshow slideshow-bottom h-1/2 pointer-events-none">
				{bottomSlideshow.map((slide, i) => (
					<div className="image-container" key={i}>
						<img src={slide} alt="wolfame img" />
					</div>
				))}
				{bottomSlideshow.map((slide, i) => (
					<div className="image-container" key={i}>
						<img src={slide} alt="wolfame img" />
					</div>
				))}
			</div>
		</section>
	);
}
