import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import HeroLoader from "./HeroLoader";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import EventsSection from "./EventsSection";
import "./home.scss";

function heroLoadingAnim(
	timelineRef: React.MutableRefObject<gsap.core.Timeline | undefined>
) {
	timelineRef.current && timelineRef.current.progress(0).kill();
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
	timelineRef.current = introAnimTimeline;

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
	const homepageRef = useRef<HTMLDivElement>(null);
	const timelineRef = useRef<gsap.core.Timeline>();

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			heroLoadingAnim(timelineRef);
		}, homepageRef);

		return () => ctx.revert();
	}, []);

	return (
		<div ref={homepageRef} className="homepage">
			<HeroLoader />
			<HeroSection />
			<AboutSection />
			<EventsSection />
		</div>
	);
}
