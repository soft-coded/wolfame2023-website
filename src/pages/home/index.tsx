import { useRef } from "react";
import gsap from "gsap";

import HeroLoader from "./HeroLoader";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import EventsSection from "./EventsSection";
import GallerySection from "./GallerySection";
import Page from "../../components/page/Page";
import "./home.scss";

function heroLoadingAnim() {
	// make the logo and title ready for the intro anim
	gsap.set(".hero-section .logo", { scale: 1.5, opacity: 0 });
	gsap.set(".hero-section .title", { opacity: 0 });
	document.documentElement.style.overflowY = "hidden";
	const body = document.getElementsByTagName("body")[0];
	body.style.overflowY = "hidden";

	// pause the slideshow animations
	const slideShows = document.querySelectorAll<HTMLDivElement>(".slideshow");
	slideShows.forEach((slideshow) => {
		slideshow.style.animationPlayState = "paused";
	});

	const introAnimTimeline = gsap.timeline({
		defaults: { duration: 1, ease: "power3.out" },
	});

	// hide the hero-loader-text
	introAnimTimeline.to(".hero-loader-text", {
		opacity: 0,
		display: "none",
		duration: 1,
		delay: 1,
	});
	// hide hero-loader
	introAnimTimeline.to(".hero-loader", { scaleY: 0, display: "none" });
	// reveal the logo
	introAnimTimeline.to(".hero-section .logo", {
		opacity: 1,
		scale: 1,
	});
	// reveal the title and play the slideshows
	introAnimTimeline.to(".hero-section .title", {
		opacity: 1,
		onComplete: () => {
			// re-enable scrolling
			document.documentElement.style.overflowY = "auto";
			body.style.overflowY = "auto";

			// play the slideshow animation
			slideShows.forEach(
				(slideshow) => (slideshow.style.animationPlayState = "running")
			);
		},
	});
}

export default function HomePage() {
	const homepageRef = useRef<HTMLDivElement>(null);

	return (
		<Page>
			<div ref={homepageRef} className="homepage">
				<HeroLoader heroLoadingAnim={heroLoadingAnim} />
				<HeroSection />
				<AboutSection />
				<EventsSection />
				<GallerySection />
			</div>
		</Page>
	);
}
