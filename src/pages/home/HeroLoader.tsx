import LoadingSpinner from "../../components/loading-spinner";

export default function HeroLoader() {
	return (
		<section className="hero-loader will-change-transform fixed inset-0">
			<LoadingSpinner className="hero-loader-spinner absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-[2]" />
		</section>
	);
}
