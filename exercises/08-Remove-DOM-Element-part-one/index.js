//your code here

//let element = document.querySelector("ul > #secondElement");

let element = document.querySelector("ul > li:nth-child(2)");
element.parentNode.removeChild(element);
