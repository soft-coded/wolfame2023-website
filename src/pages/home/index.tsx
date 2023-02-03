import { useLayoutEffect } from "react";
import gsap from "gsap";

import HeroLoader from "./HeroLoader";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import "./home.scss";

function heroLoadingAnim() {
	// make the logo and title ready for the intro anim
	gsap.set(".logo", { scale: 1.5, opacity: 0 });
	gsap.set(".title", { opacity: 0 });

	// pause the slideshow animations
	const slideShows = document.querySelectorAll<HTMLDivElement>(".slideshow");
	slideShows.forEach((slideshow) => {
		slideshow.style.animationPlayState = "paused";
	});

	const introAnimTimeline = gsap.timeline({
		defaults: { duration: 1, ease: "power3.out" },
	});
	// hide the hero-loader-spinner
	introAnimTimeline.to(".hero-loader-spinner", {
		opacity: 0,
		display: "none",
		duration: 2,
	});
	// hide hero-loader
	introAnimTimeline.to(".hero-loader", { scaleY: 0, display: "none" });
	// reveal the logo
	introAnimTimeline.to(".logo", {
		opacity: 1,
		scale: 1,
	});
	// reveal the title and play the slideshows
	introAnimTimeline.to(".title", {
		opacity: 1,
		onComplete: () => {
			slideShows.forEach(
				(slideshow) => (slideshow.style.animationPlayState = "running")
			);
		},
	});
}

export default function HomePage() {
	useLayoutEffect(heroLoadingAnim, []);

	return (
		<div className="homepage">
			<HeroLoader />
			<HeroSection />
			<AboutSection />
		</div>
	);
}
