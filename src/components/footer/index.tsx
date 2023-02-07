import { Link } from "react-router-dom";

import wolfImg from "../../assets/wolf.png";
import "./index.scss";

export default function Footer() {
	return (
		<footer className="site-footer">
			<div className="container flex justify-between">
				<div className="title-logo flex flex-col items-center">
					<div className="image-container">
						<img src={wolfImg} alt="wolf" />
					</div>
					<h5>WOLFAME 2023</h5>
				</div>
				<div className="routes footer-section">
					<h5>EXPLORE</h5>
					<ul className="flex flex-col">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/">About</Link>
						</li>
						<li>
							<Link to="/">Events</Link>
						</li>
						<li>
							<Link to="/">Gallery</Link>
						</li>
					</ul>
				</div>
				<div className="contact footer-section">
					<h5>CONTACT</h5>
					<ul>
						<li>trilokij5@gmail.com</li>
						<li>raushan14189@gmail.com</li>
						<li>singhmayank7073@gmail.com</li>
						<li>+91 8920557192</li>
						<li>+91 6202595022</li>
						<li>+91 9928966956</li>
					</ul>
				</div>
				<div className="socials footer-section">
					<h5>SOCIALS</h5>
					<ul>
						<li>LinkedIn</li>
						<li>Facebook</li>
						<li>Instagram</li>
						<li>Whatsapp</li>
					</ul>
				</div>
			</div>
			<div className="copyright text-center">
				Copyright &copy; {new Date().getFullYear()}. All rights reserved by
				Wolfame Comittee and IIEST, Shibpur.
			</div>
		</footer>
	);
}
