import { useState, Fragment, useEffect } from "react";

import { getEventLeaders, getEventMatches } from "../../api/events";

const eventList = [
	{ route: "futsal", label: "FUTSAL" },
	{ route: "tug-of-war", label: "TUG OF WAR" },
	{ route: "badminton", label: "BADMINTON" },
	{ route: "table-tennis", label: "TABLE TENNIS" },
	{ route: "basketball", label: "BASKETBALL" },
	{ route: "volleyball", label: "VOLLEYBALL" },
	{ route: "cricket", label: "SHORT PITCH CRICKET" },
	{ route: "chess", label: "CHESS" },
	{ route: "carrom", label: "CARROM" },
	{ route: "powerlifting", label: "POWERLIFTING" },
	{ route: "strong-woman", label: "STRONG WOMAN" },
	{ route: "bgmi", label: "BGMI" },
	{ route: "fifa", label: "FIFA" },
	{ route: "valorant", label: "VALORANT" },
];

function EventButton({
	children,
	onClick,
	isActive = false,
}: {
	children: React.ReactNode;
	onClick: (e?: any) => void;
	isActive: boolean;
}) {
	return (
		<button
			className={`event-button ${isActive ? "active" : ""}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

// [TEAM 1, TEAM 2, WINNER][]
type MatchesDataType = [string, string, string][];
type LeadersDataType = [string, number][];

export default function BoardSection() {
	const [activeEvent, setActiveEvent] = useState(eventList[0]);
	const [leaders, setLeaders] = useState<LeadersDataType | null>(null);
	const [matches, setMatches] = useState<MatchesDataType | null>(null);

	useEffect(() => {
		async function loadData() {
			setLeaders(null);
			setMatches(null);
			try {
				const leadersData = await getEventLeaders(activeEvent.route);
				const matchesData = await getEventMatches(activeEvent.route);
				setLeaders(leadersData.data.list);
				setMatches(matchesData.data.matches);
			} catch (err) {
				setLeaders([["ERROR", 0]]);
				setMatches([["ERROR", "ERROR", "ERROR"]]);
				console.error(err);
			}
		}

		loadData();
	}, [activeEvent]);

	return (
		<section className="board-section min-h-screen flex flex-col">
			<div className="container flex flex-col flex-1">
				<div className="event-buttons-container flex gap-6 overflow-x-scroll pb-5">
					{eventList.map((event, i) => (
						<EventButton
							key={i}
							isActive={activeEvent.label === event.label}
							onClick={() => setActiveEvent(event)}
						>
							{event.label}
						</EventButton>
					))}
				</div>
				<h4 className="text-center mt-8">STANDINGS</h4>
				{leaders == null ? (
					<h5 className="text-center mt-6">LOADING...</h5>
				) : (
					<div className="board-container flex-1 mt-6 p-8">
						<span className="grid-label font-bold">POS.</span>
						<span className="grid-label font-bold">HALL/HOSTEL</span>
						<span className="grid-label font-bold">MATCHES WON</span>
						{leaders.map((data, i) => (
							<Fragment key={i}>
								<span>{i + 1}</span>
								<span>{data[0]}</span>
								<span>{data[1]}</span>
							</Fragment>
						))}
					</div>
				)}
				<h4 className="text-center mt-8">RECENT MATCHES</h4>
				{matches == null ? (
					<h5 className="text-center mt-6">LOADING...</h5>
				) : (
					<div className="board-container flex-1 mt-6 p-8">
						<span className="grid-label font-bold">TEAM 1</span>
						<span className="grid-label font-bold">TEAM 2</span>
						<span className="grid-label font-bold">WINNER</span>
						{matches.map((data, i) => (
							<Fragment key={i}>
								<span>{data[0]}</span>
								<span>{data[1]}</span>
								<span>{data[2]}</span>
							</Fragment>
						))}
					</div>
				)}
			</div>
		</section>
	);
}
