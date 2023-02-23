import { useEffect, useState } from "react";
import constants from "../../utils/constants";
import { imageTiltGyro } from "../../utils/functions";

const isSafari =
	typeof (DeviceOrientationEvent as any).requestPermission === "function";

function GyroInfo({ heroLoadingAnim }: { heroLoadingAnim: () => void }) {
	function handleSafariGyro() {
		(DeviceOrientationEvent as any)
			.requestPermission()
			.then((res: "granted" | "denied") => {
				if (res === "granted") {
					window.addEventListener("deviceorientation", (e) => {
						imageTiltGyro(e, ".logo");
						imageTiltGyro(e, ".gallery-image");
					});
				} else alert("Gyroscope permission denied");
			})
			.catch((err: Error) => alert(err))
			.finally(() => {
				heroLoadingAnim();
			});
	}

	useEffect(() => {
		if (isSafari) return;

		setTimeout(() => {
			heroLoadingAnim();
		}, 500);
		/* eslint-disable-next-line */
	}, []);

	return (
		<div>
			{isSafari ? (
				<button onClick={handleSafariGyro} className="primary-button">
					ENABLE GYROSCOPE
				</button>
			) : (
				<h6>GYROSCOPE ENABLED</h6>
			)}
		</div>
	);
}

export default function HeroLoader({
	heroLoadingAnim,
}: {
	heroLoadingAnim: () => void;
}) {
	const [loadedPercent, setLoadedPercent] = useState(0);
	const [showInfo, setShowInfo] = useState(false);

	useEffect(() => {
		const allImages = document.querySelectorAll("img");
		let haveLoaded = 0;

		function incrementOnLoad() {
			haveLoaded++;
			const loadedRatio = haveLoaded / allImages.length;
			setLoadedPercent(Math.round(loadedRatio * 100));
			if (haveLoaded === allImages.length) {
				if (constants.isMobile) {
					setShowInfo(true);
				} else heroLoadingAnim();
			}
		}

		allImages.forEach((image) => {
			image.addEventListener("load", incrementOnLoad);
		});
	}, [heroLoadingAnim]);

	return (
		<section className="hero-loader will-change-transform fixed inset-0">
			<div className="hero-loader-text w-full h-full flex items-center justify-center flex-col">
				{/* eslint-disable-next-line */}
				<h1 className="WOLFAME"></h1>
				{showInfo ? (
					<GyroInfo heroLoadingAnim={heroLoadingAnim} />
				) : (
					<h4>{loadedPercent}%</h4>
				)}
			</div>
		</section>
	);
}
