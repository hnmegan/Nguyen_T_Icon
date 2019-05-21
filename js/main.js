(() => {
// stub 
	console.log('fired'); 

// select elements with Javascript

// Setting up a variable using the let keyword,
// And using a css selector to find the element we want to use

// Let stores the reference to element as a variable ( in memory)
	let mainHeadline = document.querySelector(".main-headline"),
		subHeadline = document.querySelector("h3"),
		swapTextButton = document.querySelector(".switch-type"),
		allImages = document.querySelectorAll("#image-container img"),
		objectButton = document.querySelector(".container button");

	// functions are reusable pieces of code - put these between the variable and the event handling
	// that you can run anytime

	function logMyId() {
		console.log(this.id);

	//toggle a class here with classList???????????
	}

	function swapText(){
		mainHeadline.textContent = "Baby shark doo doo doo";
		mainHeadline.classList.toggle("selected");

		subHeadline.textContent = "lol";
		subHeadline.classList.toggle("selected");
	}

	function logTheSVG() {
		console.log(this.previousElementSibling.id);
	}

	//events always go down here

	swapTextButton.addEventListener("click", swapText);

	// select and loop through a bunch of items at once => one to many relationship
	allImages.forEach(item => {
		item.addEventListener("click", logMyId);
	});

	// the button beside the svg objectButton

	objectButton.addEventListener("click", logTheSVG)


})();