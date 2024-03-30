//Q.1 Print all even numbers from 1 to 100
for (let m=1; m<=100;m++){
    if(m%2===0){
        console.log("m is : ", m);
        m++;
    }
}


//Q.2 Ask the user to enter his name, output should be displayed in "@username" format
let fullName = prompt("Enter your full name without spaces : ");
let str4 = "@"
console.log(str4.concat(fullName));