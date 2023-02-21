import gsap from "gsap";

export function animateTitleBg(
	titleBgClass: string,
	scrollTriggerClass: string
) {
	gsap.fromTo(
		titleBgClass,
		{
			maxHeight: 0,
		},
		{
			scrollTrigger: {
				trigger: scrollTriggerClass,
				start: "top center-=30px",
				scrub: true,
			},
			duration: 1,
			maxHeight: "100vh",
			ease: "power4.out",
		}
	);
}

export function imageTilt(e: MouseEvent, imageClass: string) {
	const { offsetX, offsetY, target } = e;
	const { clientHeight, clientWidth } = target as HTMLElement;
	const xPos = offsetX / clientWidth - 0.5;
	const yPos = offsetY / clientHeight - 0.5;
	gsap.to(imageClass, {
		duration: 0.5,
		x: xPos * 20,
		y: yPos * 30,
		rotationX: -yPos * 30,
		rotationY: xPos * 30,
		ease: "power4.out",
	});
}
