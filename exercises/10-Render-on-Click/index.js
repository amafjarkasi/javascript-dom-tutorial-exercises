let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here

	// let body = document.getElementsByTagName("body");
	var addBody = document.createElement("div");
	addBody.style.backgroundColor = "yellow";

	var addText = document.createTextNode("Hello World");
	addBody.appendChild(addText);
	document.body.appendChild(addBody);
});
