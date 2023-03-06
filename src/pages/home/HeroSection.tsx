import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import wolfPng from "../../assets/wolf.png";
import slideshow6 from "../../assets/home-page/hero-section/slideshow6.jpg";
import slideshow7 from "../../assets/home-page/hero-section/slideshow7.jpg";
import slideshow8 from "../../assets/home-page/hero-section/slideshow8.jpg";
import slideshow9 from "../../assets/home-page/hero-section/slideshow9.jpg";
import slideshow15 from "../../assets/home-page/hero-section/slideshow15.jpg";
import slideshow16 from "../../assets/home-page/hero-section/slideshow16.jpg";
import slideshow17 from "../../assets/home-page/hero-section/slideshow17.jpg";
import slideshow18 from "../../assets/home-page/hero-section/slideshow18.jpg";
import { imageTilt, imageTiltGyro } from "../../utils/functions";

const topSlideshow = [slideshow6, slideshow7, slideshow8, slideshow9];

const bottomSlideshow = [slideshow15, slideshow16, slideshow17, slideshow18];

export default function HeroSection() {
	const heroSectionRef = useRef<HTMLElement>(null);

	useLayoutEffect(() => {
		if (!heroSectionRef.current) return;
		const heroSection = heroSectionRef.current;
		const heroImageTilt = (e: MouseEvent) => imageTilt(e, ".logo");
		const heroImageTiltGyro = (e: DeviceOrientationEvent) =>
			imageTiltGyro(e, ".logo");

		const ctx = gsap.context(() => {
			heroSection.addEventListener("mousemove", heroImageTilt);
			window.addEventListener("deviceorientation", heroImageTiltGyro);
		}, heroSectionRef);

		return () => {
			ctx.revert();
			heroSection.removeEventListener("mousemove", heroImageTilt);
			window.removeEventListener("deviceorientation", heroImageTiltGyro);
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
