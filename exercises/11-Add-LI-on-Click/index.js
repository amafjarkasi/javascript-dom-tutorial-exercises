let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here

	let ulTag = document.getElementById("myList");
	let newElement = document.createElement("li");
	let newItem = document.createTextNode("Fourth Element");

	newElement.appendChild(newItem);
	ulTag.appendChild(newElement);
});
