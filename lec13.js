//Fetch APIs
const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

function getFacts() {
    fetch(URL)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            factPara.innerText = data[2].text;
        })
}
btn.addEventListener("click", getFacts);
//response.json() converts the data from the array-object format into a proper text format


// Difference between API and JSON file :
//  The user and the server send a data request in the API. The API then designates how the data will be called using the GET method and the affiliated links shared. A JSON object then retrieves data and outputs either an error message or shows data depending on the user request.