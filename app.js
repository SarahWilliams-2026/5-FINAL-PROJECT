// https://www.omdbapi.com/?i=tt3896198&apikey=97a8a533&s=${title}

const movieListEl = document.querySelector(".movie-list");
const searchInput = document.querySelector("#site-search");
const loadingStateEl = document.querySelector(".loading-state");
let currentMovies = [];


async function main(title = "twilight") {
  loadingStateEl.style.display = "flex";
  movieListEl.innerHTML = "";

  const response = await fetch(
    `https://www.omdbapi.com/?apikey=97a8a533&s=${title}`
  );

  const movieData = await response.json();

  loadingStateEl.style.display = "none";

  if (movieData.Response === "False") {
    movieListEl.innerHTML = "<p>No movies found.</p>";
    return;
  }

    currentMovies = movieData.Search;
    renderMovies(currentMovies);
}

function searchMovies(event) {
  event.preventDefault();

  const title = searchInput.value;
  main(title);
}

main();

function renderMovies(movies) {
  movieListEl.innerHTML = movies
    .map((movie) => movieHTML(movie))
    .join("");
}

function sortMovies(event) {
  if (event.target.value === "NEWEST_TO_OLDEST") {
    currentMovies.sort(
      (a, b) => parseInt(b.Year) - parseInt(a.Year)
    );
  } else if (event.target.value === "OLDEST_TO_NEWEST") {
    currentMovies.sort(
      (a, b) => parseInt(a.Year) - parseInt(b.Year)
    );
  }

  renderMovies(currentMovies);
}

function showMovieDetails(id) {
    localStorage.setItem("id", id);
    window.location.href = "user.html"
}

function movieHTML(movie) {
  return `
    <div class="movie-card" onclick="showMovieDetails('${movie.imdbID}')">
      <img class="movie-card__poster" src="${movie.Poster}" alt="${movie.Title} poster">
      <div class="movie-card__container">
        <h3>${movie.Title}</h3>
        <p><b>Rated:</b> ${movie.Rating}</p>
        <p><b>Year:</b> ${movie.Year}</p>
      </div>
    </div>
  `;
}

