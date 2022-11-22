let results = document.querySelector("#results");
let form = document.querySelector("form");
let searchTerm;
const url = "https://itunes.apple.com/search?term=";

form.addEventListener("submit", (event) => {
    event.preventDefault();
    searchTerm = url + form.querySelector('#key').value + '/'
  console.log("submitted");
  fetch(searchTerm, {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  })
    .then((response) => {
      return response.json();

      // this reads the json and returns a JS object
    })
    .then((data) => {
      // data is whatever the prior promise retuned, in this case an ovbject conatining ht results from the fetch
      for (let song of data.results) {
      console.log(`This is what we got from the API: ${song.trackName}`);
      }
    });
});


function loadSongs(song) {
    for (let song of data.results){
        
    }
}