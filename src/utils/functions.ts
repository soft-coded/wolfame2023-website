import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

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

export function scrollSnapAnim(
	selectorQuery: string,
	enterAnim: gsap.core.Tween | undefined = undefined
) {
	const sections = gsap.utils.toArray<HTMLDivElement>(selectorQuery);

	const scrolling = {
		enabled: true,
		events: ["scroll", "wheel", "touchmove", "pointermove"],
		prevent: (e: Event) => e.preventDefault(),
		disable() {
			if (scrolling.enabled) {
				scrolling.enabled = false;
				window.addEventListener("scroll", gsap.ticker.tick, { passive: true });
				scrolling.events.forEach((e, i) =>
					(i ? document : window).addEventListener(e, scrolling.prevent, {
						passive: false,
					})
				);
			}
		},
		enable() {
			if (!scrolling.enabled) {
				scrolling.enabled = true;
				window.removeEventListener("scroll", gsap.ticker.tick);
				scrolling.events.forEach((e, i) =>
					(i ? document : window).removeEventListener(e, scrolling.prevent)
				);
			}
		},
	};

	function goToSection(section: HTMLElement) {
		if (scrolling.enabled) {
			// skip if a scroll tween is in progress
			scrolling.disable();
			gsap.to(window, {
				scrollTo: { y: section, autoKill: false },
				onComplete: scrolling.enable,
				duration: 1,
				ease: "power3",
			});

			enterAnim?.restart();
		}
	}

	sections.forEach((section) => {
		ScrollTrigger.create({
			trigger: section,
			start: "top bottom-=1",
			end: "bottom top+=1",
			onEnter: () => goToSection(section),
			onEnterBack: () => goToSection(section),
		});
	});
}
