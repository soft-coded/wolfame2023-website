import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import futsalPhoto from "../../assets/events/futsal.jpg";
import tugOfWarPhoto from "../../assets/events/tug-of-war.jpg";
import volleyballPhoto from "../../assets/events/volleyball.jpg";
import badmintonPhoto from "../../assets/events/badminton.jpg";
import basketballPhoto from "../../assets/events/basketball.jpg";
import chessPhoto from "../../assets/events/chess.jpg";
import carromPhoto from "../../assets/events/carrom.jpg";
import ttPhoto from "../../assets/events/table-tennis.jpg";
import bgmiPhoto from "../../assets/events/bgmi.jpg";
import cricketPhoto from "../../assets/events/cricket.jpg";
import powerliftingPhoto from "../../assets/events/powerlifting.jpg";
import valorantPhoto from "../../assets/events/valorant.jpg";
import fifaPhoto from "../../assets/events/fifa.jpg";
import scratchPng from "../../assets/scratch.png";
import { animateTitleBg } from "../../utils/functions";

const eventsList = [
	{ event: "Futsal", image: futsalPhoto },
	{ event: "Tug of war", image: tugOfWarPhoto },
	{
		event: "Volleyball",
		image: volleyballPhoto,
	},
	{ event: "Badminton", image: badmintonPhoto },
	{ event: "Basketball", image: basketballPhoto },
	{ event: "Chess", image: chessPhoto },
	{ event: "Carrom", image: carromPhoto },
	{ event: "Table tennis", image: ttPhoto },
	{ event: "BGMI", image: bgmiPhoto },
	{ event: "Cricket", image: cricketPhoto },
	{ event: "Powerlifting", image: powerliftingPhoto },
	{ event: "Valorant", image: valorantPhoto },
	{ event: "Fifa", image: fifaPhoto },
];

export default function EventsSection() {
	const eventsSectionRef = useRef<HTMLElement>(null);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			animateTitleBg(".events-section .title-bg", ".events-section header");
		}, eventsSectionRef);

		return () => ctx.revert();
	}, []);

	return (
		<section ref={eventsSectionRef} className="events-section">
			<header className="h-screen w-screen flex items-center justify-center bg-gradient">
				<h3 className="text-center relative">
					<div className="image-container title-bg">
						<img src={scratchPng} alt="Scratch" />
					</div>
					<span className="relative z-10">EVENTS</span>
				</h3>
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
					pagination={{
						dynamicBullets: true,
						clickable: false,
					}}
					modules={[EffectCoverflow, Pagination]}
					className="events-swiper"
				>
					{eventsList.map((eventObj, i) => (
						<SwiperSlide
							key={i}
							className="event-slide image-container relative"
						>
							<img src={eventObj.image} alt={eventObj.event} />
							<h4 className="slide-title text-center">
								{eventObj.event.toUpperCase()}
							</h4>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}
