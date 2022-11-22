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
     /* for (let song of data.results) {
      console.log(`This is what we got from the API: ${song.trackName}`);
      
      }*/
      loadSongs(data.results);
    });
});


function loadSongs(songs) {
    for (let song of songs){
        
        //create card container
        let card = document.createElement('div');
        card.classList.add('card','is-3', 'tile');
        
        //create image container
        let image = document.createElement('div');
        image.classList.add('card-image');

        //link picture to image container
        let pic = document.createElement('img');
        pic.src = song.artworkUrl100;

        //create container for song title
        let title = document.createElement('div');
        title.classList.add('title', 'is-4' )
        title.innerText = song.trackName;
        
        //append all children to card and place in results section
        image.appendChild(pic);
        card.appendChild(image);
        card.appendChild(title);
        results.appendChild(card);
    }
}