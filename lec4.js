//Arrays
let marks = [31,28,22,29,29];
console.log(marks[2]);
marks[1] = 30; //changes the marks '28' from index posn 1 to '30'
console.log(marks);

//Printing using for loop
let crics = ["Rohit", "Gill", "Kohli", "Iyer", "Rahul", "Hardik"];
for(let idx=0; idx<crics.length; idx++){
    console.log(crics[idx]);
}

console.log("End of for loop");

//Printing using for-of loop
for(let cric of crics){
    console.log(cric);
}

console.log("End of for-of loop in Normalcase");

//Printing using for-of loop in UPPERCASE
for(let cric of crics){
    console.log(cric.toUpperCase());
}

console.log("End of for-of loop in Uppercase");

//Array Methods
let fruits = ["orange", "apple", "banana", "pear"];
fruits.push("mango", "kiwi", "melon"); //inserts at end
fruits.pop(); //removes from end 
console.log(fruits);
let vegetables = ["tomato", "potato"];
let mix = fruits.concat(vegetables,crics);
console.log(mix);

let heroes = ["Antman", "Batman", "Spiderman", "Ironman"];
heroes.unshift("CaptainAmerica"); //inserts at start
console.log(heroes);
let del = heroes.shift(); //removes from start
console.log(del);










