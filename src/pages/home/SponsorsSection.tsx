import { useRef } from "react";

import SectionHeader from "../../components/section-header";
import "./home.scss";

export default function SponsorsSection() {
	const sponsorsSectionRef = useRef<HTMLElement>(null);

	return (
		<section ref={sponsorsSectionRef} className="sponsors-section">
			<SectionHeader sectionRef={sponsorsSectionRef}>SPONSORS</SectionHeader>
		</section>
	);
}
