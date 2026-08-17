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
    <img
        class="poster__img"
        src="${movieData.Poster}"
        alt="${movieData.Title} poster"
    >
    <div class="title__name">
      <img class="bucket__icon" src="./Assets/popcorn.bucket.png" alt="">
      ${movieData.Title}
    </div>
    <p class="title__body">
      ${movieData.Plot}
    </p>
    <div class="other__info">
     <p><img class="info__icon" src="./Assets/single.pop.png" alt=""> <b>Year:</b> ${movieData.Year}</p>
     <p><img class="info__icon" src="./Assets/single.pop.png" alt=""> <b>Rated:</b> ${movieData.Rated}</p>
     <p><img class="info__icon" src="./Assets/single.pop.png" alt=""> <b>Genre:</b> ${movieData.Genre}</p>
     <p><img class="info__icon" src="./Assets/single.pop.png" alt=""> <b>Runtime:</b> ${movieData.Runtime}</p>
    </div>
  </div>
`;
}

main();
