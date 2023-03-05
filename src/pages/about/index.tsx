import HeroSection from "./HeroSection";
import DevelopersSection from "./DevelopersSection";
import Page from "../../components/page/Page";
import "./about.scss";

export default function AboutPage() {
	return (
		<Page>
			<div className="about-page">
				<HeroSection />
				<DevelopersSection />
			</div>
		</Page>
	);
}
