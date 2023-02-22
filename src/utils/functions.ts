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

let prevLR = 0;

export function imageTiltGyro(e: DeviceOrientationEvent, imageClass: string) {
	let frontToBack = e.beta!;
	let leftToRight = e.gamma!;

	if (frontToBack > 60 || frontToBack < -60) leftToRight = 0;
	else if (leftToRight > 60 || leftToRight < -60) frontToBack = 0;

	if (leftToRight < 0 && prevLR > 86) leftToRight = 89;
	else if (leftToRight > 0 && prevLR < -86) leftToRight = -89;
	prevLR = leftToRight;

	gsap.to(imageClass, {
		duration: 0.7,
		rotationX: -frontToBack * 0.7,
		rotationY: leftToRight * 0.7,
		ease: "power3.out",
	});
}
