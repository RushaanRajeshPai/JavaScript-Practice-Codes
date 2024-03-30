let heading1 = document.getElementById("heading1");
console.dir(heading1);
let heading2 = document.getElementById("heading2");
console.dir(heading2);
//shows properties of the id selected

//let heading = document.getElementsByClassName("myClass");
//console.dir(heading);
//shows properties of the class selected...(commented out coz we didnt create class)

let parahs = document.getElementsByTagName("p");
console.dir(parahs);
//shows properties of the paragraphs selected


let firstElement = document.querySelector("p");
console.dir(firstElement);
//returns 1st element

let allElements = document.querySelectorAll("p");
console.dir(allElements);
//returns all elements i.e a NodeList

let firstEl = document.querySelector("#heading1");
console.dir(firstEl);
//returns 1st element of the id
//NOTE : Its not poss to return all elements of #id

//let firstEl = document.querySelector(".myClass");
//console.dir(firstEl);
//returns 1st element of the class

//let allElements = document.querySelectorAll("p");
//console.dir(allElements);
//returns all elements i.e a NodeList of a class