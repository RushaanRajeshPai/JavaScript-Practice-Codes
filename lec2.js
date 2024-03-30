//Arithmetic Operators
let a = 5;
let b = 2;
console.log("a + b = ",a+b);
console.log("a - b = ",a-b);
console.log("a * b = ",a*b);
console.log("a / b = ",a/b);
console.log("a % b = ",a%b);

//..................................................................................
//Unary Operators
let c = 10;
console.log("c++", c++);
console.log("c", c);

let d = 10;
console.log("++d", ++d);
console.log("d", d);

let e = 10;
console.log("e--", e--);
console.log("e", e);

let f = 10;
console.log("--f", --f);
console.log("f", f);

//..................................................................................
//Assignment Operators
let g = 10;
g += 4; //g = g + 4
console.log("g", g);
//(do the same above with sub,multi,div,modulus)

//..................................................................................
//Comparison Operators 
let h = 10;
let i = 11;
console.log("10 == 11 is :", h==i);
console.log("10 != 11 is :", h!=i);
//(always returns a true or false as output, i.e a boolean expression as output)
//(do the same for >,<,>=,<=)

//..................................................................................
//Logical Operators
let j = 10;
let k = 5;
let cond1 = j>k;
let cond2 = j>=k;
console.log("cond1 && cond2 is : ", cond1 && cond2);
//(if even one condition is false, ans will be directly false....LOGICAL AND (&&))
//(if even one condition is true, ans will be directly true....LOGICAL OR (||))
//(it reverses the ans, i.e if ans is true, then output will ans will show false and viceversa....LOGICAL NOT (!))


//..................................................................................
//Conditional Statements
//if statement
let mode1 = "dark";
let color1;
if(mode1 === "dark"){
    color1 = "black";
}
if(mode1 === "light"){
    color1 = "white";
}
console.log(color1);

//if-else statement
let mode2 = "light";
let color2;
if(mode2 === "dark"){
    color2 = "black";
}else{
    color2 = "white";
}
console.log(color2);


//..................................................................................
//Ternary Operators
let age = 19;
let ans = age>=18 ? "can drive" : "cannot drive";
console.log(ans);
