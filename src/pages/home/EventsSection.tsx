import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import SectionHeader from "../../components/section-header";
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

const eventsList = [
	{
		event: "FUTSAL",
		image: futsalPhoto,
		description: "DRIBBLE PAST YOUR OPPONENTS",
	},
	{
		event: "TUG OF WAR",
		image: tugOfWarPhoto,
		description: "TUSSLE FOR THE TROPHY",
	},
	{
		event: "VOLLEYBALL",
		image: volleyballPhoto,
		description: "SMASH 'EM UP",
	},
	{
		event: "BADMINTON",
		image: badmintonPhoto,
		description: "DON'T GET TOO COCKY",
	},
	{
		event: "BASKETBALL",
		image: basketballPhoto,
		description: "DUNK AND DIVE",
	},
	{
		event: "CHESS",
		image: chessPhoto,
		description: "FACE THE WOLF'S GAMBIT",
	},
	{
		event: "CARROM",
		image: carromPhoto,
		description: "RANI AKELE NAHI MILEGI",
	},
	{
		event: "TABLE TENNIS",
		image: ttPhoto,
		description: "SERVE WITH A SPIN",
	},
	{
		event: "SHORT PITCH CRICKET",
		image: cricketPhoto,
		description: "SAVE YOUR BAILS",
	},
	{
		event: "POWERLIFTING",
		image: powerliftingPhoto,
		description: "LET THE BAR RING YOUR BELLS",
	},
	{
		event: "BGMI",
		image: bgmiPhoto,
		description: "BEST GAMER MAKES IT",
	},
	{
		event: "VALORANT",
		image: valorantPhoto,
		description: "COORDINATE TO DOMINATE",
	},
	{
		event: "FIFA",
		image: fifaPhoto,
		description: "TRAIN FINGERS FOR FOOTBALL",
	},
];

export default function EventsSection() {
	const eventsSectionRef = useRef<HTMLElement>(null);

	return (
		<section ref={eventsSectionRef} className="events-section">
			<SectionHeader sectionRef={eventsSectionRef}>EVENTS</SectionHeader>
			<div className="events-swiper-container flex items-center justify-center">
				<Swiper
					effect="coverflow"
					grabCursor
					centeredSlides
					slidesPerView="auto"
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
							className="event-slide items-center justify-center relative"
							style={{
								backgroundImage: `url(${eventObj.image})`,
								backgroundPosition: "center center",
								backgroundRepeat: "no-repeat",
								backgroundSize: "cover",
								display: "flex",
							}}
						>
							<div className="card-text flex items-center flex-col gap-2 pl-4 pr-4">
								<h4 className="text-center">{eventObj.event}</h4>
								<h6 className="font-semibold text-center">
									{eventObj.description}
								</h6>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}
