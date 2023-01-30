import wolfPng from "../../assets/wolf.png";

export default function HeroSection() {
	return (
		<section className="hero-section w-screen h-screen flex">
			<div className="image-container logo self-center m-auto">
				<img src={wolfPng} alt="Wolfame logo" />
			</div>
		</section>
	);
}
