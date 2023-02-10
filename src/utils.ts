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
				start: "top top+=100px",
				toggleActions: "restart none none reverse",
			},
			duration: 1,
			maxHeight: "100vh",
			ease: "power4.out",
		}
	);
}
