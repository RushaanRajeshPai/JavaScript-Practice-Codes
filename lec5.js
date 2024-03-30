//Functions
function myFunction(){
    console.log("Rushaan");
}
myFunction();

function add(a,b){
    console.log(a+b);
}
add(5,6);


//Arrow Functions
const arrowAdding = (c,d)=>{
    console.log(c+d);
}
arrowAdding(3,4);

const arrowHello = () =>{
    console.log('Hello');
}
arrowHello();


//For-each Array Method
let nums = [1,2,3,4,5];
nums.forEach((num) =>{
    console.log(num*num);
})


//Map Array Method (similar to foreach, though it returns a new array unlike for each)
let marks = [22,30,43,59,67];
let newArr = marks.map((val) => {
    return val*2;
})
console.log("The new array is : ",newArr);


//Filter Array Method (filters out according to the condition and prints a new array)
let numbers = [1,2,23,44,76,59,87,68];

let evenArr = numbers.filter((eve) => {
    return eve % 2 === 0;
})
console.log("The new even array is : ",evenArr);

let divByThree = numbers.filter((div) => {
    return div > 3;
})
console.log("The new even array is : ", divByThree);


//Reduce Array Method (gives a single output)
let score = [33,41,1,69,75];

const output = score.reduce((res,curr) => {
    return res+curr;
})
console.log("The sum of all numbers is : ",output);
//here 33+41=74, now 74+1=75, now 75+69=144 and so on...)
// so 33 is res, 41 is curr... soon 74 is res and 1 is curr

const final = score.reduce((prev,curr) => {
    return prev>curr ? prev:curr;
})
console.log("The greatest of all numbers is ",final);