console.log("Let's get this party started!");

const API_KEY = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';
const $gifForm = document.querySelector(".gif-form");
const $removeGIFsButton = document.querySelector(".remove-button");
let $search = document.querySelector('#gif-search');
let $gifContainer = document.querySelector('#gif-container');

$gifForm.addEventListener("submit", handleClick);
$removeGIFsButton.addEventListener('click', removeGIFs);

/** search the Giphy website for a gif based on user input */

async function searchForGif() {

  const response = await fetch(
    `http://api.giphy.com/v1/gifs/search?q=${$search.value}&api_key=${API_KEY}`
  );
  const gif = await response.json();
  return gif;
}

/** conductor function that handles form input */

async function handleClick(evt) {
  evt.preventDefault();

  const giphyData = await searchForGif();
  console.log(giphyData);
  const randGifIndex = pickRandIndex(giphyData.data);
  addGif(giphyData.data[randGifIndex].images.original.url);
}

/** selects a random number based on the amount of gifs returned from
 * searchForGif
 */

function pickRandIndex(gifs) {
  console.log('pickRandIndex', gifs);
  const gifDataLength = gifs.length;
  return Math.floor(Math.random() * gifDataLength);
}

/** appends selected gif to the gif container */

function addGif(gifURL) {
  //append to gif div
  const $newGif = document.createElement("img");
  console.log(gifURL);
  $newGif.src = gifURL;
  $gifContainer.appendChild($newGif);
}

/** clears the gif container */

function removeGIFs() {
  $gifContainer.innerHTML = '';
}