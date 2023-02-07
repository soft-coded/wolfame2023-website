import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Swiper as SwiperClass } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

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
// import slideshow14 from "../../assets/slideshow14.jpg";
// import slideshow15 from "../../assets/slideshow15.jpg";
// import slideshow16 from "../../assets/slideshow16.jpg";
// import slideshow17 from "../../assets/slideshow17.jpg";
// import slideshow18 from "../../assets/slideshow18.jpg";

const eventsList = [
	{ event: "Futsal", image: slideshow1, color: "#000" },
	{ event: "Tug of war", image: slideshow3, color: "green" },
	{ event: "Volleyball", image: slideshow2, color: "var(--clr-primary-dark)" },
	{ event: "Badminton", image: slideshow4, color: "pink" },
	{ event: "Basketball", image: slideshow5, color: "violet" },
	{ event: "Chess", image: slideshow6, color: "purple" },
	{ event: "Carrom", image: slideshow7, color: "orange" },
	{ event: "Table tennis", image: slideshow8, color: "green" },
	{ event: "BGMI", image: slideshow9, color: "red" },
	{ event: "Cricket", image: slideshow10, color: "yellow" },
	{ event: "Powerlifting", image: slideshow11, color: "red" },
	{ event: "Valorant", image: slideshow12, color: "red" },
	{ event: "Fifa", image: slideshow13, color: "red" },
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
		const ctx = gsap.context(() => {}, eventsSectionRef);

		return () => ctx.revert();
	}, []);

	return (
		<section ref={eventsSectionRef} className="events-section">
			<header className="h-screen w-screen flex items-center justify-center">
				<h1 className="text-center">EVENTS</h1>
			</header>
			<div className="events-swiper-container h-screen flex items-center justify-center">
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
							<h1>{eventObj.event}</h1>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}
