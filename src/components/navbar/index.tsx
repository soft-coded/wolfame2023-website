import { NavLink } from "react-router-dom";

import "./index.scss";

const links = [
	{ to: "/", label: "HOME" },
	{ to: "/events", label: "EVENTS" },
	{ to: "/leaderboards", label: "LEADERBOARDS" },
];

export default function Navbar() {
	return (
		<nav className="navbar fixed z-20 left-0 right-0">
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
