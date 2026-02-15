const TENOR_KEY = "LIVDSRZULELA";


const button = document.getElementById("findBtn");
const input = document.getElementById("keywordInput");
const resultsContainer = document.getElementById("gifResults");

button.addEventListener("click", fetchGifs);

function fetchGifs() {
  const keyword = input.value.trim();
  if (!keyword) return;

  resultsContainer.innerHTML = "";

  const requestUrl =
    "https://api.tenor.com/v1/search?q=" +
    keyword +
    "&key=" +
    TENOR_KEY +
    "&limit=8";

  const request = new XMLHttpRequest();
  request.open("GET", requestUrl);
  request.send();

  request.onload = function () {
    if (request.status === 200) {
      const responseData = JSON.parse(request.responseText);
      renderGifs(responseData.results);
    }
  };
}

function renderGifs(gifs) {
  gifs.forEach(item => {
    const col = document.createElement("div");
    col.className = "col-6 col-md-3";

    const card = document.createElement("div");
    card.className = "gif-card";

    const image = document.createElement("img");
    image.src = item.media[0].gif.url;

    card.appendChild(image);
    col.appendChild(card);
    resultsContainer.appendChild(col);
  });
}
