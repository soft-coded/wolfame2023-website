import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import SectionHeader from "../../components/section-header";
import shrutuBabyJpg from "../../assets/about-page/shrutu-baby.jpg";
import githubSvg from "../../assets/svgs/github.svg";
import linkedinSvg from "../../assets/svgs/linkedin.svg";
import emailSvg from "../../assets/svgs/gmail.svg";

const socials = [
	{ link: "https://github.com/soft-coded", label: "github", icon: githubSvg },
	{
		link: "https://www.linkedin.com/in/shrutanten/",
		label: "linkedin",
		icon: linkedinSvg,
	},
	{ link: "mailto:shrutanten.work@gmail.com", label: "email", icon: emailSvg },
];

export default function DevelopersSection() {
	const devSectionRef = useRef<HTMLElement>(null);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			const containerChildren =
				gsap.utils.toArray<HTMLDivElement>(".container > *");
			containerChildren.forEach((child) => {
				gsap.set(child, { opacity: 0, y: 100 });

				gsap.to(child, {
					y: 0,
					opacity: 1,
					ease: "power2.out",
					duration: 0.5,
					scrollTrigger: {
						trigger: child,
						start: "top top+=90%",
						toggleActions: "restart none none reverse",
					},
				});
			});
		}, devSectionRef);

		return () => ctx.revert();
	}, []);

	return (
		<section ref={devSectionRef} className="dev-section pt-12 pb-12">
			<SectionHeader sectionRef={devSectionRef}>
				WEBSITE DEVELOPER
			</SectionHeader>
			<div className="content-wrapper">
				<div className="container flex flex-col items-center gap-6">
					<div className="image-container profile-photo">
						<img src={shrutuBabyJpg} alt="Shrutanten" />
					</div>
					<h4 className="text-center">SHRUTANTEN</h4>
					<h6 className="text-center mb-5">
						B.Tech final year,
						<br /> Computer Science and Technology,
						<br /> IIEST, Shibpur
					</h6>
					<div className="socials flex items-center gap-8">
						{socials.map((social, i) => (
							<a key={i} href={social.link} target="_blank" rel="noreferrer">
								<div className={`image-container ${social.label}`}>
									<img src={social.icon} alt={social.label} />
								</div>
							</a>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
