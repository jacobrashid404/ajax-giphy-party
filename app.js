console.log("Let's get this party started!");

const API_KEY = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';
let search = document.querySelector('#gif-search');

async function searchForGif() {

  const response = await fetch(
    `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${API_KEY}`
  );
  const gif = await response.json();
  console.log(gif);
  return gif;
}

async function handleClick(evt) {
  evt.preventDefault();

  const searchValue = search.value;

  const giphyData = await searchForGif();
  console.log(giphyData);

}


const $gifForm = document.querySelector(".gif-form");
$gifForm.addEventListener("submit", handleClick);