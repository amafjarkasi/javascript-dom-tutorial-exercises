window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	// your code here

	for (const i of countries) {
		let getSelection = document.querySelector("#mySelect");
		let populate = document.createElement("option");
		populate.textContent = i;
		document.querySelector("#mySelect").appendChild(populate);
	}
};

let dropdown = document.getElementById("mySelect");
dropdown.addEventListener("change", function() {
	var result = dropdown.options[dropdown.selectedIndex].text;
	alert(result);
});
