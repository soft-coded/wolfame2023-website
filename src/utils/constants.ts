const constants = {
	mobileWidth: 600, // <= 600px
	get isMobile() {
		return window.matchMedia(`(max-width: ${this.mobileWidth}px)`).matches;
	},
};

export default constants;
