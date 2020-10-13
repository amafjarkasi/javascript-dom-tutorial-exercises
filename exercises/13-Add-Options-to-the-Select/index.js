window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	// your code here

	for (const i of countries) {
		let getSelection = document.getElementById("mySelect");
		let populate = document.createElement("option");
		let countryAdd = document.createTextNode(i);
		populate.appendChild(countryAdd);
		getSelection.appendChild(populate);
	}
};

let button = document.getElementById("mySelect");
button.addEventListener("change", function() {
	//alert(button.options[button.selected]);
});
