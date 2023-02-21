import { NavLink } from "react-router-dom";

import "./index.scss";

const links = [
	{ to: "/", label: "HOME" },
	{ to: "/events", label: "EVENTS" },
	{ to: "/leaderboards", label: "BOARDS" },
];

export default function Navbar() {
	return (
		<nav className="navbar fixed left-0 right-0">
			<div className="container flex items-center justify-between">
				{links.map((link, i) => (
					<NavLink key={i} to={link.to}>
						{link.label}
					</NavLink>
				))}
			</div>
		</nav>
	);
}
