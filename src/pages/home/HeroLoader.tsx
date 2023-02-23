import { useEffect, useState, useRef, useCallback } from "react";
import constants from "../../utils/constants";
import { imageTiltGyro } from "../../utils/functions";

const isSafari =
	typeof (DeviceOrientationEvent as any).requestPermission === "function";

const heroTiltGyro = (e: DeviceOrientationEvent) => imageTiltGyro(e, ".logo");
const galleryTiltGyro = (e: DeviceOrientationEvent) =>
	imageTiltGyro(e, ".gallery-image");

const ANIM_TIMEOUT_DURATION = 500;

function GyroInfo({ heroLoadingAnim }: { heroLoadingAnim: () => void }) {
	const gyroInfoRef = useRef<HTMLDivElement>(null);

	const triggerAnim = useCallback(() => {
		setTimeout(() => {
			heroLoadingAnim();
		}, ANIM_TIMEOUT_DURATION);
	}, [heroLoadingAnim]);

	function handleSafariGyro() {
		if (!gyroInfoRef.current) return;
		const gyroInfoDiv = gyroInfoRef.current;

		(DeviceOrientationEvent as any)
			.requestPermission()
			.then((res: "granted" | "denied") => {
				if (res === "granted") {
					window.addEventListener("deviceorientation", heroTiltGyro);
					window.addEventListener("deviceorientation", galleryTiltGyro);

					gyroInfoDiv.innerHTML = "<h6>GYROSCOPE ENABLED</h6>";
				} else {
					gyroInfoDiv.innerHTML = "<h6>GYROSCOPE DISABLED</h6>";
				}
			})
			.catch((err: Error) => {
				alert(err.message || err);
				gyroInfoDiv.innerHTML = "<h6>GYROSCOPE DISABLED</h6>";
			})
			.finally(triggerAnim);
	}

	console.log("rendered");

	useEffect(() => {
		if (isSafari) return;

		triggerAnim();

		return () => {
			if (!isSafari) return;

			window.removeEventListener("deviceorientation", heroTiltGyro);
			window.removeEventListener("deviceorientation", galleryTiltGyro);
		};
	}, [triggerAnim]);

	return (
		<div ref={gyroInfoRef}>
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
