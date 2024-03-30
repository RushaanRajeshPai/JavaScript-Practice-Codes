//Q.1 Calculate the average scores of the foll. student
let scores = [85,97,44,37,76,60];

let sum = 0;
for(let idx = 0; idx<scores.length; idx++){
    sum = sum + scores[idx];
}

avg = sum/scores.length;
console.log("The average of these scores is : ",avg);

//Q.2 All items have a discount of 10%. Store the new prices in the array
let items =  [250,645,300,900,50];
for(let i=0; i<items.length; i++){
    offer = items[i]/10;
    items[i] = items[i] - offer;
}
console.log(items);
