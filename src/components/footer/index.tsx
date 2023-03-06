import { Link } from "react-router-dom";

import wolfImg from "../../assets/wolf.png";
import instagramSvg from "../../assets/svgs/instagram.svg";
import gmailSvg from "../../assets/svgs/gmail.svg";
import phoneSvg from "../../assets/svgs/phone.svg";
import linkedinSvg from "../../assets/svgs/linkedin.svg";
import "./index.scss";

const links = [
	{
		label: "Home",
		to: "/",
	},
	{
		label: "About",
		to: "/about",
	},

	{
		label: "Events",
		to: "/events",
	},
	{
		label: "Boards",
		to: "/leaderboards",
	},
];

const emails = [
	"contactwolfame@gmail.com",
	"trilokij5@gmail.com",
	"shrutanten.work@gmail.com",
];

const phoneNumbers = ["+91 8920557192", "+91 6202595022", "+91 9928966956"];

const socials = [
	{
		label: "Instagram",
		link: "https://www.instagram.com/wolfame_official/",
		icon: instagramSvg,
	},
	{
		label: "LinkedIn",
		link: "https://www.linkedin.com/in/wolfame-the-sports-and-cultural-fest-25696a265",
		icon: linkedinSvg,
	},
];

const currentYear = new Date().getFullYear();

export default function Footer() {
	return (
		<footer className="site-footer">
			<div className="container flex justify-between">
				<div className="title-logo flex flex-col items-center">
					<div className="image-container">
						<img src={wolfImg} alt="wolf" />
					</div>
					<p>WOLFAME {currentYear}</p>
				</div>
				<div className="routes footer-section">
					<h6>EXPLORE</h6>
					<ul className="flex flex-col">
						{links.map((link, i) => (
							<li key={i}>
								<Link to={link.to}>{link.label}</Link>
							</li>
						))}
					</ul>
				</div>
				<div className="contact footer-section">
					<h6>CONTACT</h6>
					<ul>
						{emails.map((email, i) => (
							<li key={i}>
								<a target="_blank" rel="noreferrer" href={`mailto:${email}`}>
									<div className="image-container">
										<img src={gmailSvg} alt="email" />
									</div>
									{email}
								</a>
							</li>
						))}
						{phoneNumbers.map((num, i) => (
							<li key={i}>
								<a target="_blank" rel="noreferrer" href={`tel:${num}`}>
									<div className="image-container">
										<img src={phoneSvg} alt="email" />
									</div>
									{num}
								</a>
							</li>
						))}
					</ul>
				</div>
				<div className="socials footer-section">
					<h6>SOCIALS</h6>
					<ul>
						{socials.map((social, i) => (
							<li key={i}>
								<a target="_blank" rel="noreferrer" href={social.link}>
									<div className="image-container">
										<img src={social.icon} alt={social.label} />
									</div>
									<span>{social.label}</span>
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className="copyright container text-center">
				Copyright &copy; {currentYear}. All rights reserved by Wolfame
				organisers and IIEST, Shibpur.
			</div>
		</footer>
	);
}
