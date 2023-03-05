import HeroSection from "./HeroSection";
import Page from "../../components/page/Page";
import "./about.scss";

export default function AboutPage() {
	return (
		<Page>
			<div className="about-page">
				<HeroSection />
			</div>
		</Page>
	);
}
