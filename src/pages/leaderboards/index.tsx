import Page from "../../components/page/Page";
import HeroSection from "./HeroSection";
import BoardSection from "./BoardSection";
import "./leaderboards.scss";

export default function Leaderboards() {
	return (
		<Page>
			<div className="leaderboards-page">
				<HeroSection />
				<BoardSection />
			</div>
		</Page>
	);
}
