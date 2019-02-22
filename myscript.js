document.addEventListener("DOMContentLoaded", function() {

	
	resetButton()
	createSquareRow(16)
	var x = document.getElementById("container").childNodes[0];

	

});


function createSquareRow(grids) {

	for (var j = 0; j < grids; j++) {
		var squareRow = document.createElement("div");
		squareRow.classList.add("squareRow")
		let heightWidth = 100 / grids;
		squareRow.style.height = `${heightWidth}%`
		var rowPlacement = document.getElementById("container");

		rowPlacement.appendChild(squareRow);
		for (var i = 0; i < grids; i++) {
			var square = document.createElement("div");
			square.classList.add("square");
			
			square.style.width = `${heightWidth}%`

			var squarePlacement = document.getElementById("container").getElementsByClassName("squareRow")[j];
			squarePlacement.appendChild(square)
			}
		}
		document.addEventListener("mouseover", function(event) {
		if (event.target.tagName === "DIV") {
			let r = Math.floor(Math.random() * 256)
			let g = Math.floor(Math.random() * 256)
			let b = Math.floor(Math.random() * 256)
			event.target.style.backgroundColor = `rgb(${r} ${g} ${b})`;
			if (event.target.dataset.opacity == null){
				event.target.dataset.opacity = "1";
			} else if (event.target.dataset.opacity < 0.1) {
				event.target.dataset.opacity = "0";
			} else {
				let newOpacity = event.target.dataset.opacity - 0.1;
				event.target.dataset.opacity = `${newOpacity}`;
				event.target.style.opacity = `${newOpacity}`;
			}
		}
	});
}



function resetButton() {
	var resetButton = document.createElement("button");
	resetButton.textContent = "Reset";
	resetButton.id = "reset";

	var buttonPlacement = document.getElementsByTagName("BODY")[0];
	var placeBefore = document.getElementById("container")
	buttonPlacement.insertBefore(resetButton, placeBefore);

	document.getElementById("reset").addEventListener("click", function() {
		console.log("reset!");
		let element = document.getElementById("container");
		while (element.firstChild) {
			element.removeChild(element.firstChild);
		}
		let grids = prompt("How many grids*grids would you like?");
		createSquareRow(grids);
	});
}
