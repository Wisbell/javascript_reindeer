/*
Your task is to loop through all the reindeer in the array, and add the name of the reindeer to the single 
HTML <div> element provided. The name of the reindeer should be prepended with the corresponding color from the other array.

For example:

Blue Dasher
Red Dancer
etc...
*/




var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("coloredReindeer");


for (var i = 0; i < reindeer.length; i++) {

	// Create new element to add to the dom to create spacing
	var newPara = document.createElement("p");

	// Create the content to add to the newly created paragraph
	var newDeer = document.createTextNode(colors[i] + " " + reindeer[i]);

	// Add the content to the new paragraph
	newPara.appendChild(newDeer);

	// Add the new paragraph with the content to the #coloredReindeer div
	hohohoElement.appendChild(newPara);

	

	// -- This looks ugly --

	// hohohoElement.appendChild(document.createTextNode(reindeer[i]));

}