console.log("Let's get this party started!");

const API_KEY = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';
let $search = document.querySelector('#gif-search');
let $gifContainer = document.querySelector('#gif-container');

async function searchForGif() {

  const response = await fetch(
    `http://api.giphy.com/v1/gifs/search?q=${$search.value}&api_key=${API_KEY}`
  );
  const gif = await response.json();
  return gif;
}

async function handleClick(evt) {
  evt.preventDefault();

  const giphyData = await searchForGif();
  console.log(giphyData);
  const randGifIndex = pickRandIndex(giphyData.data);
  addGif(giphyData.data[randGifIndex].url);
}

function pickRandIndex(gifs){
  console.log('pickRandIndex', gifs);
  const gifDataLength = gifs.length;
  return Math.floor(Math.random() * gifDataLength);
}

function addGif(gifURL){
  //append to gif div
  const $newGif = document.createElement("img");
  $newGif.setAttribute('src', gifURL);
  $gifContainer.append($newGif);
}


const $gifForm = document.querySelector(".gif-form");
$gifForm.addEventListener("submit", handleClick);