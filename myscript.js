document.addEventListener("DOMContentLoaded", function() {
	
	createSquareRow()
});


function createSquareRow() {
		for (var j = 0; j < 16; j++) {
			var squareRow = document.createElement("div");
			squareRow.classList.add("squareRow")
			var rowPlacement = document.getElementById("container");

			rowPlacement.appendChild(squareRow);
			
			for (var i = 0; i < 16; i++) {
				var square = document.createElement("div");
				square.classList.add("square")
				var squarePlacement = document.getElementById("container").getElementsByClassName("squareRow")[j];
				
				squarePlacement.appendChild(square)
			}
		}
	}