// Challenge
// Get the element represented by the id "rep" in the document
const articleRef = document.querySelector("#rep");
// Create a text node and have it represented by a variable
const textRep = document.createTextNode("Do I really know anything about Javascript?");
// Add the text represented by the variable textRep using appendChild to the DOM
articleRef.appendChild(textRep);

// Advance Challenge
// Get the first <article> element in the document
const article1 = document.getElementsByTagName("article")[0];   
// Create a "class" attribute
const congress = document.createAttribute("congressional-district");   
// Set the value of the class attribute
congress.value = "5";
// Add the class attribute to <article>
article1.setAttributeNode(congress);                               
