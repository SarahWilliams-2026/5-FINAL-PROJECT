// https://www.omdbapi.com/?i=tt3896198&apikey=97a8a533&s=${title}
const movieListEl = document.querySelector(".movie-list");

async function main() {
    const movie = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=97a8a533&s=${"twilight"}`);
    const movieData = await movie.json();

    if (movieData.Response === "False") {
  movieListEl.innerHTML = "<p>No movies found.</p>";
  return;
    }

movieListEl.innerHTML = movieData.Search
  .map((movie) => movieHTML(movie))
  .join("");
}

main();

function showMovieDetails(id) {
    localStorage.setItem("id", id);
    window.location.href = `${window.location.origin}/user.html`
    console.log(window.location);
}

function movieHTML(movie) {
  return `
    <div class="movie-card" onclick="showMovieDetails('${movie.imdbID}')">
      <img class="movie-card__poster" src="${movie.Poster}" alt="${movie.Title} poster">
      <div class="movie-card__container">
        <h3>${movie.Title}</h3>
        <p><b>Type:</b> ${movie.Type}</p>
        <p><b>Year:</b> ${movie.Year}</p>
      </div>
    </div>
  `;
}

