import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

import SectionHeader from "../../components/section-header";
import "./home.scss";
import cocaCola from "../../assets/home-page/sponsors-section/coca-cola.jpg";
import decathlon from "../../assets/home-page/sponsors-section/decathlon.jpg";
import elm from "../../assets/home-page/sponsors-section/elm.jpg";
import fusionGrill from "../../assets/home-page/sponsors-section/fusion-grill.jpg";
import grapevine from "../../assets/home-page/sponsors-section/grapevine.jpg";
import lic from "../../assets/home-page/sponsors-section/lic.jpg";
import mtv from "../../assets/home-page/sponsors-section/mtv.jpg";
import nba from "../../assets/home-page/sponsors-section/nba.jpg";
import talentwala from "../../assets/home-page/sponsors-section/talentwala.jpg";
import theGlobalHues from "../../assets/home-page/sponsors-section/the-global-hues.jpg";
import waaMomo from "../../assets/home-page/sponsors-section/waa-momo.jpg";

const sponsorsList = [
	{ logo: elm, title: "E-learn markets", backgroundColor: "#ffffff" },
	{ logo: fusionGrill, title: "Fusion grill", backgroundColor: "#ff5d11" },
	{ logo: waaMomo, title: "waa momo", backgroundColor: "#f7e32c" },
];

function SponsorCard({
	logo,
	title,
	backgroundColor,
}: {
	logo: string;
	title: string;
	backgroundColor: string;
}) {
	return (
		<div
			className="sponsor-card image-container px-8"
			style={{ backgroundColor }}
		>
			<img src={logo} alt={title} className="object-contain" />
		</div>
	);
}

function SponsorColumn({
	title,
	sponsors,
}: {
	title: string;
	sponsors: {
		logo: string;
		title: string;
		backgroundColor: string;
	}[];
}) {
	return (
		<div className="sponsors-column flex flex-col gap-4 items-center">
			<h6 className="title text-center font-semibold">{title}</h6>
			<div className="sponsors-container flex items-center gap-4">
				{sponsors.map((sponsor, i) => (
					<SponsorCard key={i} {...sponsor} />
				))}
			</div>
		</div>
	);
}

export default function SponsorsSection() {
	const sponsorsSectionRef = useRef<HTMLElement>(null);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			const sponsorCards =
				gsap.utils.toArray<HTMLDivElement>(".sponsors-column");

			gsap.set(sponsorCards, { x: -50, opacity: 0 });

			sponsorCards.forEach((card) => {
				gsap.to(card, {
					x: 0,
					opacity: 1,
					ease: "power3.out",
					scrollTrigger: {
						trigger: card,
						start: "top bottom-=10%",
						end: "bottom center",
						toggleActions: "restart none none reverse",
						scrub: true,
					},
				});
			});
		}, sponsorsSectionRef);

		return () => ctx.revert();
	}, []);

	return (
		<section ref={sponsorsSectionRef} className="sponsors-section">
			<SectionHeader sectionRef={sponsorsSectionRef}>SPONSORS</SectionHeader>
			<div className="wrapper bg-gradient">
				<div className="container flex flex-col justify-center">
					<SponsorColumn
						title="TITLE SPONSOR"
						sponsors={[
							{
								logo: cocaCola,
								title: "Coca Cola",
								backgroundColor: "#ffffff",
							},
						]}
					/>
					<div className="sponsors-column-group">
						<SponsorColumn
							title="POWERED BY"
							sponsors={[
								{
									logo: decathlon,
									title: "Decathlon",
									backgroundColor: "#0082c6",
								},
							]}
						/>
						<SponsorColumn
							title="IN ASSOCIATION WITH"
							sponsors={[
								{ logo: lic, title: "lic", backgroundColor: "#000000" },
							]}
						/>
					</div>
					<div className="sponsors-column-group">
						<SponsorColumn
							title="YOUTH PARTNER"
							sponsors={[
								{
									logo: grapevine,
									title: "Grapevine",
									backgroundColor: "#000000",
								},
							]}
						/>
						<SponsorColumn
							title="ARTIST PARTNER"
							sponsors={[
								{
									logo: talentwala,
									title: "talentwala",
									backgroundColor: "#000000",
								},
							]}
						/>
					</div>
					<SponsorColumn
						title="MEDIA PARTNERS"
						sponsors={[
							{ logo: nba, title: "nba", backgroundColor: "#d81f32" },
							{ logo: mtv, title: "mtv", backgroundColor: "#000000" },
							{
								logo: theGlobalHues,
								title: "the global hues",
								backgroundColor: "#ffffff",
							},
						]}
					/>
					<SponsorColumn
						title="OTHER PARTNERS"
						sponsors={[
							{
								logo: elm,
								title: "E-learn markets",
								backgroundColor: "#ffffff",
							},
							{
								logo: fusionGrill,
								title: "Fusion grill",
								backgroundColor: "#ff5d11",
							},
							{ logo: waaMomo, title: "waa momo", backgroundColor: "#f7e32c" },
						]}
					/>
				</div>
			</div>
		</section>
	);
}
