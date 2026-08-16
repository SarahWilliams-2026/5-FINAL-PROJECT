const titleListEl = document.querySelector('.title-list');

async function main() {
  const id = localStorage.getItem("id");

  const movie = await fetch(
    `https://www.omdbapi.com/?apikey=97a8a533&i=${id}`
  );

  const movieData = await movie.json();
  console.log(movieData);

titleListEl.innerHTML = `
  <div class="title">
    <img src="${movieData.Poster}" alt="${movieData.Title} poster">
    <div class="title__name">
      ${movieData.Title}
    </div>
    <p class="title__body">
      ${movieData.Plot}
    </p>
    <p><b>Year:</b> ${movieData.Year}</p>
    <p><b>Rated:</b> ${movieData.Rated}</p>
    <p><b>Genre:</b> ${movieData.Genre}</p>
    <p><b>Runtime:</b> ${movieData.Runtime}</p>
  </div>
`;
}

main();
