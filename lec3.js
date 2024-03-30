//For Loop
for(let i=1; i<=500; i++){
    console.log("Rushaan");
}


let sum = 0
for(let i=1; i<=5; i++){
    sum=sum+i
}
console.log("Sum = ",sum)
// the above was an eg of calculating first 5 nos

for(let i=1; i<=5; i++){
    console.log("i = ", i);
}

console.log("For Loop has ended")

//..................................................................
//While Loop
let i = 1;
while(i<=5){
    console.log("i = ",i);
    i++;
}

while(i<=5){
    i++;
    console.log("i = ",i);
}

console.log("While Loop has ended")

//.....................................................................
//Do While Loop
let j = 1;
do{
    console.log("j = ", j);
    j++;
}while(j<=5);

console.log("Do-While Loop has ended")

//.....................................................................
//For-of Loop
let str = "Rushaan"
let size = 0;
for(let k of str){
    console.log("k = ",k);
    size++;
}
console.log("Size of string is : ",size)

console.log("For-of Loop has ended")
//used in strings,arrays

//.....................................................................
//For-in Loop
const profile = {
    username : "rushaannn_",
    followers : 825,
    following : 647,
    isFollow : true,
    posts : 3
}

for(key in profile){
    console.log("Key is : ", key,"  Value is : ", profile[key])
}
//used in objects,arrays

//.....................................................................
//Strings
let str1 = "Pai Classes";
let str2 = " was founded by Raghuveer Pai ";
let str3 = "Yash";
console.log(str1);
console.log(str1.length);
console.log(str1[0]);

//String Methods
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());
console.log(str1.slice(1,6)); //1st bracket is start, 2nd is end.
console.log(str1.concat(str2));
console.log(str2.concat(str1));
console.log(str3.replace("Y", "J"));//strings are immutable.






















