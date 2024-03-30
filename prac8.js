//Q.1 Create a toggle button, which changes the background colour on being clicked

let modeBtn = document.querySelector("#mode");
let currMode = "light";
let  body = document.querySelector("body");

//Method 1
// modeBtn.addEventListener("click",() => {
//     if (currMode === "light"){
//         currMode = "dark";
//         document.querySelector("body").style.backgroundColor = "black";
//     }else{
//         currMode = "light";
//         document.querySelector("body").style.backgroundColor = "white";
//     }
//     console.log(currMode);
// })

//Method 2
modeBtn.addEventListener("click",() => {
    if (currMode === "light"){
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);
})