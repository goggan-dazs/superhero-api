const key = "7d1e1bc3"

const inputBox = document.getElementById("input");
const searchButton = document.getElementById("button");
let image = document.getElementById("image");

searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    let superheroName = inputBox.value;
    console.log(superheroName)
    
    const url = `https://www.omdbapi.com/?s=${superheroName}&apikey=7d1e1bc3` 

    
    console.log(url)
    
    
    
    // fetch(url)
    // .then((response) => response.json())
    // .then(responseData => {
    //     showResults(responseData.Search)})
    // .catch(error => alert("Make sure to put your API key in the code"));
    fetch(url)
    .then((response) => response.json())
    .then(responseData => {
        showResults(responseData.Search)})
    .catch(error => alert("Make sure to put your API key in the code"));
});

function showResults(results) {
    console.log(results)
    results.forEach(result => {
      let item = document.createElement("li");
      item.innerHTML = result.Title;
      document.getElementById("results").appendChild(item);
    });
    
   };

//   searchButton.addEventListener("click", (e) => {
//     e.preventDefault();
//     let superheroName = inputBox.value;
//     console.log(superheroName)
    
//     const url = `https://www.omdbapi.com/?s=${superheroName}&apikey=7d1e1bc3` 
    
//     fetch(url)
//     .then((response) => response.json())
//     .then(responseData => {
//         showResults(responseData.Search)})
//     .catch(error => alert("Make sure to put your API key in the code"));
// });
// function showResults(results) {
//     console.log(results)
//     results.forEach(result => {
//       let item = document.createElement("img");
//       item.innerHTML = result.Poster;
//       document.getElementById("results").appendChild(item);
//     });
    
//   };


