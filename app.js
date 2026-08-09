// https://www.omdbapi.com/?i=tt3896198&apikey=97a8a533&s=${title}
const movieListEl = document.querySelector(".movie-list");

async function main() {
    const movieTitle = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=97a8a533&s=${"twilight"}`);
    const movieTitleData = await movieTitle.json();
    movieListEl.innerHTML = movieTitleData.Search.map((movieTitle) => movieHTML(movieTitle)).join("");

    if (movieTitleData.Response === "False") {
  movieListEl.innerHTML = "<p>No movies found.</p>";
  return;
}

main();

function movieHTML(movieTitle) {
   return `<div class="movie-card">
    <div class="movie-card__container">
        <h3>${movie.Title}</h3>
            <p><b>Type:</b> ${movie.Type}</p>
            <p><b>Year:</b> ${movie.Year}</p>
            <p><b>Cover Art:</b> <a href="${movie.Poster}" target="_blank">Poster</a></p>
      </div>
    </div>`;
}