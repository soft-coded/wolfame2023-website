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

const images = [
	{ image: slideshow1, size: "13vw", top: "7%", left: "10%" },
	{ image: slideshow2, size: "15vw", top: "5%", left: "80%" },
	{ image: slideshow3, size: "17vw", top: "13%", left: "23%" },
	{ image: slideshow4, size: "12vw", top: "7%", left: "55%" },
	{ image: slideshow5, size: "15vw", top: "22%", left: "71%" },
	{ image: slideshow6, size: "16vw", top: "15%", left: "40%" },
	{ image: slideshow7, size: "14vw", top: "30%", left: "8%" },
	{ image: slideshow8, size: "12vw", top: "43%", left: "44%" },
	{ image: slideshow9, size: "13vw", top: "45%", left: "27%" },
	{ image: slideshow10, size: "15vw", top: "40%", left: "78%" },
	{ image: slideshow11, size: "12vw", top: "55%", left: "65%" },
	{ image: slideshow12, size: "14vw", top: "64%", left: "80%" },
	{ image: slideshow13, size: "14vw", top: "73%", left: "11%" },
	{ image: slideshow14, size: "14vw", top: "70%", left: "40%" },
	{ image: slideshow15, size: "15vw", top: "72%", left: "62%" },
];

const randomModifiers: number[] = [
	-8, 10, 9, 4, -4, -6, 9, 3, 4, 6, -6, -3, 5, -3, -9,
];

function imageMove(e: MouseEvent) {
	const galleryImages = gsap.utils.toArray<HTMLDivElement>(".gallery-image");

	const { offsetX, offsetY } = e;

	galleryImages.forEach((image, i) => {
		const xPos = (offsetX / image.clientWidth) * randomModifiers[i];
		const yPos = (offsetY / image.clientHeight) * randomModifiers[i];
		gsap.to(image, {
			duration: 0.5,
			x: xPos,
			y: yPos,
			ease: "power4.out",
		});
	});
}

export default function GallerySection() {
	const gallerySectionRef = useRef<HTMLElement>(null);

	useLayoutEffect(() => {
		if (!gallerySectionRef.current) return;
		const gallerySection = gallerySectionRef.current;

		gallerySection.addEventListener("mousemove", imageMove);

		return () => {
			gallerySection.removeEventListener("mousemove", imageMove);
		};
	}, []);

	return (
		<section ref={gallerySectionRef} className="gallery-section relative">
			<h1 className="text-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none mix-blend-difference">
				GALLERY
			</h1>
			<div className="gallery-images pointer-events-none">
				{images.map((imageObj, i) => (
					<div
						key={i}
						className="gallery-image image-container absolute"
						style={{
							width: imageObj.size,
							height: imageObj.size,
							top: imageObj.top,
							left: imageObj.left,
						}}
					>
						<img src={imageObj.image} alt="gallery" />
					</div>
				))}
			</div>
		</section>
	);
}
