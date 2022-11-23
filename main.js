let results = document.querySelector("#results");
let form = document.querySelector("form");
let searchTerm;
const url = "https://itunes.apple.com/search?term=";

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    searchTerm = url + form.querySelector('#key').value + '/'
  console.log("submitted");

  fetcher(searchTerm);
  
});

function fetcher(link) {
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
}

function loadSongs(songs) {
   

    for (let song of songs){


         //create card container
        let card = document.createElement('div');   
        card.classList.add('card','is-3', 'tile');
        
        //link picture to card
        let pic = document.createElement('img');
        pic.src = song.artworkUrl100;
        card.appendChild(pic);

        //create container for song title
        let title = document.createElement('div');
        title.classList.add('title', 'is-4' )
        title.innerText = song.trackName;
        card.appendChild(title);

        let artist = document.createElement('div');
        artist.classList.add('subtitle');
        artist.innerText = song.artistName;
        title.appendChild(artist);

        let album = document.createElement('div');
        album.classList.add('subtitle');
        album.innerText = song.collectionName;
        title.appendChild(album);
        
        //append card to results section
        results.appendChild(card);


        //event listener for song preview
        card.addEventListener('click', (event) => {
            let player = document.querySelector('#audio');
            player.src = song.previewUrl;
            });

        
    }
}

function createCardEl(type, classArray, parent) {
    let newElement = document.createElement(type);
    newElement.classList.add(classArray);
    parent.appendChild(newElement);
    return newElement;
}