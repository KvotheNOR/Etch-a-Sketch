document.addEventListener("DOMContentLoaded", function() {


	function createSquareRow() {
		var squareRow = document.createElement("div");
		squareRow.classList.add("squareRow");
		squareRow.style.display = "inline-block";
		squareRow.style.minWidth = "100%";
		squareRow.style.margin = "0";
		squareRow.style.padding = "0";
		squareRow.style.backgroundColor = "Blue";
		var placement = document.getElementById("container");

		placement.appendChild(squareRow);

		var squarePlacement = document.getElementById("container").getElementsByClassName("squareRow")[0];

		for (var i = 0; i <= 16; i++) {
			var square = document.createElement("div");

			square.style.width = "5.9%";
			square.style.height = "10px";
			square.style.float = "left";
			
			console.log(squarePlacement);
			squarePlacement.appendChild(square);
		}


	}


	createSquareRow();


});