//Asynchronous Programming
console.log("1st");
console.log("2nd");

setTimeout(() => {
    console.log("Hello, testing syncs");
}, 10000);

console.log("3rd");
console.log("4th");
//So here, it will print all the 4 things from 1st to 4th and then after 10secs(=10000ms) it will print "Hello, testing sync"


//Callbacks
function sum(a,b) {
    console.log(a+b);
}

function calculator(a,b, sumCallback) {
    sumCallback(a,b);
}

calculator(2, 4,(a,b) => {
    console.log(a+b);
})


//Callback Hell
function getData(dataId, getNextData){
    setTimeout(() => {
        console.log("Data is : ", dataId);
        if(getNextData){
            getNextData();
        }
    }, 4000);
}

getData(139, (() =>{
    getData(140, (() =>{
        getData(141)
    }));
}));
//This will print the data stored in database/API after every 4 seconds in sequence
//Callback Hell is a type of nested loops. Callback Hell is actually a problem, to solve that we have Promises


//Promises
const getPromise = () => {
    return new Promise((resolve,reject) => {
        console.log("This is a promise");
        resolve("I am fine");
        //reject("I am not fine");
    })
}
let promise = getPromise();

promise.then((res) => {
    console.log("SUCCESS....", res);
});

promise.catch((err) => {
    console.log("ERROR....", err);
});
//promise.then() works when the promise is resolved/fulfilled
//promise.catch() works when the promise is rejected
// res,err are the parameters which will print the statement written in resolve, reject


//Promise Chain
function asyncFunc1() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Data 1");
            resolve("Successful bro");
            //reject("Unsuccessful bro");
        },5000)
    })
}

function asyncFunc2() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Data 2");
            resolve("Successful bhai");
            //reject("Unsuccessful bro");
        },6000)
    })
}

console.log("Fetching data I");

asyncFunc1().then((res) => {
    console.log("Fetching data II");
    asyncFunc2().then((res) => {});
})
asyncFunc1().catch((err) => {
    console.log("NAAAAHH....", err);
})
//Promise chain does solve the problem of callback hells but its not good enough, Async-await is better

//Async-await
async function getAllData(){
    console.log("FETCHING DATA 1");
    await getData(1);
    console.log("FETCHING DATA 2");
    await getData(2);
    console.log("FETCHING DATA 3");
    await getData(3);
    
}