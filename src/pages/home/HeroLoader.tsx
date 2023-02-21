import { useEffect, useState } from "react";

export default function HeroLoader({
	heroLoadingAnim,
}: {
	heroLoadingAnim: () => void;
}) {
	const [loadedPercent, setLoadedPercent] = useState(0);

	useEffect(() => {
		const allImages = document.querySelectorAll("img");
		let haveLoaded = 0;

		function incrementOnLoad() {
			haveLoaded++;
			setLoadedPercent(Math.floor(haveLoaded / allImages.length) * 100);
			if (haveLoaded === allImages.length) {
				heroLoadingAnim();
			}
		}

		allImages.forEach((image) => {
			image.addEventListener("load", incrementOnLoad, { once: true });
		});
	}, [heroLoadingAnim]);

	return (
		<section className="hero-loader will-change-transform fixed inset-0">
			<div className="hero-loader-text w-full h-full flex items-center justify-center flex-col">
				{/* eslint-disable-next-line */}
				<h1 className="WOLFAME"></h1>
				<h4>{loadedPercent}%</h4>
			</div>
		</section>
	);
}
