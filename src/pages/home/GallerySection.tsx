import { useLayoutEffect, useRef } from "react";

import SectionHeader from "../../components/section-header";
import gallery1 from "../../assets/home-page/gallery-section/gallery1.jpg";
import gallery2 from "../../assets/home-page/gallery-section/gallery2.jpg";
import gallery3 from "../../assets/home-page/gallery-section/gallery3.jpg";
import gallery4 from "../../assets/home-page/gallery-section/gallery4.jpg";
import gallery5 from "../../assets/home-page/gallery-section/gallery5.jpg";
import gallery6 from "../../assets/home-page/gallery-section/gallery6.jpg";
import gallery7 from "../../assets/home-page/gallery-section/gallery7.jpg";
import gallery8 from "../../assets/home-page/gallery-section/gallery8.jpg";
import gallery9 from "../../assets/home-page/gallery-section/gallery9.jpg";
import gallery10 from "../../assets/home-page/gallery-section/gallery10.jpg";
import gallery11 from "../../assets/home-page/gallery-section/gallery11.jpg";
import gallery12 from "../../assets/home-page/gallery-section/gallery12.jpg";
import gallery13 from "../../assets/home-page/gallery-section/gallery13.jpg";
import gallery14 from "../../assets/home-page/gallery-section/gallery14.jpg";
import gallery15 from "../../assets/home-page/gallery-section/gallery15.jpg";
import { imageTilt, imageTiltGyro } from "../../utils/functions";
import constants from "../../utils/constants";

const col1Images = [gallery1, gallery2, gallery3, gallery4, gallery5];

const col2Images = [gallery6, gallery7, gallery8, gallery9, gallery10];

const col3Images = [gallery11, gallery12, gallery13, gallery14, gallery15];

type ColumnProps = {
	containerClassName?: string;
	imageClassName?: string;
	images: string[];
};

function GalleryImageColumn({
	containerClassName,
	imageClassName,
	images,
}: ColumnProps) {
	return (
		<div
			className={`gallery-image-column flex flex-col pointer-events-none ${
				containerClassName || ""
			}`}
		>
			{images.map((image, i) => (
				<div
					key={i}
					className={`gallery-image image-container ${imageClassName || ""}`}
				>
					<img src={image} alt="gallery img" />
				</div>
			))}
		</div>
	);
}

export default function GallerySection() {
	const gallerySectionRef = useRef<HTMLElement>(null);
	const galleryColumnsContainerRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		if (!gallerySectionRef.current || !galleryColumnsContainerRef.current)
			return;

		const galleryImageTilt = (e: MouseEvent) => imageTilt(e, ".gallery-image");
		const galleryImageTiltGyro = (e: DeviceOrientationEvent) =>
			imageTiltGyro(e, ".gallery-image");
		const galleryColumnsContainer = galleryColumnsContainerRef.current;

		galleryColumnsContainer.addEventListener("mousemove", galleryImageTilt);
		window.addEventListener("deviceorientation", galleryImageTiltGyro);

		return () => {
			galleryColumnsContainer.removeEventListener(
				"mousemove",
				galleryImageTilt
			);
			window.removeEventListener("deviceorientation", galleryImageTiltGyro);
		};
	}, []);

	return (
		<section ref={gallerySectionRef} className="gallery-section relative">
			<SectionHeader sectionRef={gallerySectionRef}>GALLERY</SectionHeader>
			<div className="gallery-images-wrapper">
				<div
					ref={galleryColumnsContainerRef}
					className="gallery-images container flex items-center justify-between"
				>
					{constants.isMobile ? (
						<GalleryImageColumn
							images={[...col1Images, ...col2Images, ...col3Images]}
							containerClassName="column-2"
						/>
					) : (
						<>
							<GalleryImageColumn
								images={col1Images}
								containerClassName="column-1"
							/>
							<GalleryImageColumn
								images={col2Images}
								containerClassName="column-2"
							/>
							<GalleryImageColumn
								images={col3Images}
								containerClassName="column-3"
							/>
						</>
					)}
				</div>
			</div>
		</section>
	);
}
