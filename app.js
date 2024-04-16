console.log("Let's get this party started!");

const API_KEY = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';

async function searchForGif(){
  const search = document.querySelector('#gif-search').value;
  
  const response = await fetch(
    `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${API_KEY}`
  );
  const gif = await response.json();
  console.log(gif);
}