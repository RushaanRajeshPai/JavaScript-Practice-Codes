let btn1 = document.querySelector("#btn1");
btn1.onclick = () => {
    console.log("1st Button was clicked");
}

let btn2 = document.querySelector("#btn2");
btn2.ondblclick = () => {
    console.log("2nd Button was clicked twice");
}

let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("Mouse was hovered");
}


//Methods USING evt 
//Method 1
//btn1.onclick = (evt) => {
//    console.log(evt);
//   console.log(evt.type);
//}

//same evt can be applied for btn2 and div(mouse hovering)

//Method 2 (using addEventListener)
btn1.addEventListener("click", (evt) => {
    console.log("1st Button was clicked");
    console.log(evt);
    console.log(evt.type);
})
