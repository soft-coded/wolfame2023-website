import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import slideshow1 from "../../assets/slideshow1.jpg";
import slideshow2 from "../../assets/slideshow2.jpg";
import slideshow3 from "../../assets/slideshow3.jpg";
import slideshow4 from "../../assets/slideshow4.jpg";
import slideshow5 from "../../assets/slideshow5.jpg";
import slideshow6 from "../../assets/slideshow6.jpg";
import slideshow7 from "../../assets/slideshow7.jpg";
import slideshow8 from "../../assets/slideshow8.jpg";
import slideshow9 from "../../assets/slideshow9.jpg";
import slideshow10 from "../../assets/slideshow10.jpg";
import slideshow11 from "../../assets/slideshow11.jpg";
import slideshow12 from "../../assets/slideshow12.jpg";
import slideshow13 from "../../assets/slideshow13.jpg";
import slideshow14 from "../../assets/slideshow14.jpg";
import slideshow15 from "../../assets/slideshow15.jpg";
import scratchPng from "../../assets/scratch.png";
import { animateTitleBg, imageTilt } from "../../utils";

const col1Images = [slideshow1, slideshow2, slideshow3, slideshow4, slideshow5];

const col2Images = [
	slideshow6,
	slideshow7,
	slideshow8,
	slideshow9,
	slideshow10,
];

const col3Images = [
	slideshow11,
	slideshow12,
	slideshow13,
	slideshow14,
	slideshow15,
];

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
		const galleryColumnsContainer = galleryColumnsContainerRef.current;

		const ctx = gsap.context(() => {
			animateTitleBg(".gallery-section .title-bg", ".gallery-section header");
		}, gallerySectionRef);

		galleryColumnsContainer.addEventListener("mousemove", galleryImageTilt);

		return () => {
			ctx.revert();
			galleryColumnsContainer.removeEventListener(
				"mousemove",
				galleryImageTilt
			);
		};
	}, []);

	return (
		<section ref={gallerySectionRef} className="gallery-section relative">
			<header className="h-screen bg-gradient flex items-center justify-center">
				<h1 className="text-center relative">
					<div className="image-container title-bg">
						<img src={scratchPng} alt="scratch" />
					</div>
					<span className="relative z-10">GALLERY</span>
				</h1>
			</header>
			<div
				ref={galleryColumnsContainerRef}
				className="gallery-images container flex items-center justify-between"
			>
				<GalleryImageColumn images={col1Images} containerClassName="column-1" />
				<GalleryImageColumn images={col2Images} containerClassName="column-2" />
				<GalleryImageColumn images={col3Images} containerClassName="column-3" />
			</div>
		</section>
	);
}
