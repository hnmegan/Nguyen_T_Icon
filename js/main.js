(() => {

// stub
 
	consle.log('fired'); 

// select elements with Javascript
// 
// Setting up a variable using the let keyword,
// And using a css selector to find the element we want to use
// Let stores the reference to element as a variable ( in memory)

	let svgGraphic = document.querySelector("#badgeSVG");

	// functions are reusable pieces of code
	// that you can run anytime

	function logMyId() {
		console.log(this.id);

		this.style.opacity = 0.5;
	}
	svgGraphic.addEventListener("Click", logMyId);
})();