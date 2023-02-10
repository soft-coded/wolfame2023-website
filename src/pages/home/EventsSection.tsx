import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Swiper as SwiperClass } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import futsalPhoto from "../../assets/events/futsal.jpg";
import tugOfWarPhoto from "../../assets/events/futsal.jpg";
import volleyballPhoto from "../../assets/events/volleyball.jpg";
import badmintonPhoto from "../../assets/events/badminton.jpg";
import basketballPhoto from "../../assets/events/basketball.jpg";
import chessPhoto from "../../assets/events/chess.jpg";
import carromPhoto from "../../assets/events/carrom.jpg";
import ttPhoto from "../../assets/events/table-tennis.jpg";
import bgmiPhoto from "../../assets/events/bgmi.webp";
import cricketPhoto from "../../assets/events/futsal.jpg";
import powerliftingPhoto from "../../assets/events/powerlifting.webp";
import valorantPhoto from "../../assets/events/valorant.jpg";
import fifaPhoto from "../../assets/events/fifa.jpg";
import scratchPng from "../../assets/scratch.png";
import { animateTitleBg } from "../../utils";

const eventsList = [
	{ event: "Futsal", image: futsalPhoto, color: "#000" },
	{ event: "Tug of war", image: tugOfWarPhoto, color: "green" },
	{
		event: "Volleyball",
		image: volleyballPhoto,
		color: "var(--clr-primary-dark)",
	},
	{ event: "Badminton", image: badmintonPhoto, color: "pink" },
	{ event: "Basketball", image: basketballPhoto, color: "violet" },
	{ event: "Chess", image: chessPhoto, color: "purple" },
	{ event: "Carrom", image: carromPhoto, color: "orange" },
	{ event: "Table tennis", image: ttPhoto, color: "green" },
	{ event: "BGMI", image: bgmiPhoto, color: "red" },
	{ event: "Cricket", image: cricketPhoto, color: "yellow" },
	{ event: "Powerlifting", image: powerliftingPhoto, color: "red" },
	{ event: "Valorant", image: valorantPhoto, color: "red" },
	{ event: "Fifa", image: fifaPhoto, color: "red" },
];

function handleSlideChange(swiper: SwiperClass) {
	const swiperContainer = document.querySelector<HTMLDivElement>(
		".events-swiper-container"
	);
	if (!swiperContainer) return;

	swiperContainer.style.backgroundColor = eventsList[swiper.activeIndex].color;
}

export default function EventsSection() {
	const eventsSectionRef = useRef<HTMLElement>(null);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			animateTitleBg(".title-bg", "header");
		}, eventsSectionRef);

		return () => ctx.revert();
	}, []);

	return (
		<section ref={eventsSectionRef} className="events-section">
			<header className="h-screen w-screen flex items-center justify-center bg-gradient">
				<h1 className="text-center relative">
					<div className="image-container title-bg">
						<img src={scratchPng} alt="Scratch" />
					</div>
					<span className="relative z-10">EVENTS</span>
				</h1>
			</header>
			<div className="events-swiper-container flex items-center justify-center">
				<Swiper
					effect="coverflow"
					grabCursor
					centeredSlides
					slidesPerView="auto"
					// coverflowEffect={{
					// 	rotate: 50,
					// 	stretch: 0,
					// 	depth: 300,
					// 	modifier: 1,
					// 	slideShadows: true,
					// }}
					// spaceBetween={50}
					modules={[EffectCoverflow]}
					className="events-swiper"
					onSlideChange={handleSlideChange}
				>
					{eventsList.map((eventObj, i) => (
						<SwiperSlide
							key={i}
							className="event-slide image-container relative"
						>
							<img src={eventObj.image} alt={eventObj.event} />
							<h3 className="slide-title">{eventObj.event}</h3>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}
