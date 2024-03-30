//Q.1 Count vowels in a string using normal function method
function countVol(str){
    let count = 0;
    for(const char of str){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ){
            count++;
        }
        console.log("The no of vowels are : ",count);
    }
}
countVol("paiclasses");

//Q.2 Above same qn wid arrow functions
const arrowCount = (str) =>{
    let count = 0;
    for(const char of str){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ){
            count++;
        }
        console.log("The no of vowels are : ",count);
    }
}
arrowCount("paiclasses");

