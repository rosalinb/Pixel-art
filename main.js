// Get references to DOM elements
const body = document.querySelector("body");
const colorBrush = document.querySelector(".color-brush-container");
const colorButton = document.querySelector("#color-button");
const movieBox = document.querySelector(".movie-box");
const posterButton = document.querySelector("#poster-button");
const pixelContainer = document.querySelector(".pixel-container");
const pixels = document.querySelectorAll(".pixel");
const resetButton = document.querySelector("#reset-button");

//Sound files :Adjust the filename and path accordingly
const gameSound = new Audio(
  "./sounds/Stage Win (Super Mario) - QuickSounds.com.mp3"
);
const gameOver = new Audio("./sounds/gameover.mp3");

// Function to create pixel grid and handle interactions
for (var i = 1000; i > 0; i--) {
  const div = document.createElement("div");
  div.classList.add("pixel");
  div.addEventListener("mouseover", handlePixelMouseOver);
  pixelContainer.appendChild(div);
}

// Event listener function for pixel mouseover
function handlePixelMouseOver(event) {
  gameSound.play();
  const pixel = event.target;
  pixel.style.background = document.querySelector("input").value;

  // Timers to change pixel color
  setTimeout(() => {
    pixel.style.backgroundColor = "red";
  }, 2000);
  setTimeout(() => {
    pixel.style.backgroundColor = "blue";
  }, 3000);
  setTimeout(() => {
    pixel.style.backgroundColor = "green";
  }, 5000);
  setTimeout(() => {
    pixel.style.backgroundColor = "#ff9a8b";
  }, 7000);
}

//Event to fetch the movie poster
posterButton.addEventListener("click", (event) => {
  event.preventDefault();
  const movieName = document.querySelector("#movie-input").value;
  findMovies(movieName);
});

//reset button to clear the grid container
resetButton.addEventListener("click", () => {
  const pixels = document.querySelectorAll(".pixel");

  // Iterate through each pixel and remove the background color
  pixels.forEach((pixel) => {
    pixel.style.background = "none";
  });
  gameOver.play();
});

// Function to fetch movie poster
function findMovies(movieName) {
  fetch(`https://omdbapi.com?apikey=2f6435d9&t=${movieName}`)
    .then((response) => response.json())
    .then((response) => {
      const movie = response;
      pixelContainer.style.backgroundImage = `url(${response.Poster})`;
    });
}
