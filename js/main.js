(() => {
// stub 
	console.log('fired'); 

// select elements with Javascript

// Setting up a variable using the let keyword,
// And using a css selector to find the element we want to use

// Let stores the reference to element as a variable ( in memory)
	let svgGraphic = document.querySelector("#badgeSVG"),
		mainHeadline = document.querySelector(".main-headline"),
		subHeadline = document.querySelector("h3"),
		swapTextButton = document.querySelector(".switch-type");

	// functions are reusable pieces of code - put these between the variable and the event handling
	// that you can run anytime

	function logMyId() {
		console.log(this.id);

		this.style.opacity = 0.5;
	}

	function swapText(){
		mainHeadline.textContent = "Baby shark doo doo doo";
		mainHeadline.classList.toggle("selected");

		subHeadline.textContent = "lol";
		subHeadline.classList.toggle("selected");
	}

	//events always go down here

	svgGraphic.addEventListener("click", logMyId);
	swapTextButton.addEventListener("click", swapText);

})();