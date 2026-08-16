const titleListEl = document.querySelector('.title-list');

async function main() {
  const id = localStorage.getItem("id");

  const movie = await fetch(
    `https://www.omdbapi.com/?apikey=97a8a533&i=${id}`
  );

  const movieData = await movie.json();
  console.log(movieData);

  titleListEl.innerHTML = movieData.map(title => 
    `<div class="title">
      <div class="title__name">
        Title Name
      </div>
      <p class="title__body">
        Title Body
      </p>
    </div>
    `).join('');
}

main();
