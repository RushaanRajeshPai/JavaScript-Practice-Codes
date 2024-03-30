// to printf anything
fullName = "RUSHAAN PAI";
age = 19;
radius = 3.45;
console.log(fullName);
console.log(age);
console.log(radius);

// to check if a certain id follows you or not
isFollow = true;   
console.log(isFollow);

// case sensitive
fullname = "Rishi Shah";
FULLNAME = "Svayam Mehta";
console.log(fullname);
console.log(FULLNAME);

// valid method
_height = 200;
$height = 300;
console.log(_height);
console.log($height);

// invalid method... you can't write it as '123height'


// datatypes in js 
let umar = 24;
console.log(umar);

// object datatypes 
// inside object datatype{
//     key : value,
// }
const student = {
    studName : "ROHIT SHARMA", 
    aged : 22,
    cgpa : 8.8,
    ispass : true,
}
console.log(student);
student["aged"] = student["aged"] + 1;
console.log(student["aged"]);