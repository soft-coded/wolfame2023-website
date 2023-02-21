import Page from "../../components/page/Page";
import scratchPng from "../../assets/scratch.png";
import "./leaderboards.scss";

export default function Leaderboards() {
	return (
		<Page>
			<div className="leaderboards-page">
				<div className="container min-h-screen flex items-center justify-center bg-gradient">
					<h3 className="text-center relative">
						<div className="image-container title-bg">
							<img src={scratchPng} alt="Scratch" />
						</div>
						<span className="relative z-10">COMING SOON</span>
					</h3>
				</div>
			</div>
		</Page>
	);
}
