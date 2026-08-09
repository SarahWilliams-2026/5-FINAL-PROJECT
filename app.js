// https://www.omdbapi.com/?i=tt3896198&apikey=97a8a533&s=${title}

async function main() {
    const movieTitle = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=97a8a533&s=${"twilight"}`);
    const movieTitleData = await movieTitle.json();
    const movieListEl = document.querySelector(".movie-list");
    console.log(movieTitleData);
    
    movieListEl.innerHTML = movieTitleData
        .map(
            (movieTitle) => `<div class="movie-card">
                <div class="movie-card__container">
                    <h3>Movie Title</h3>
                        <p><b>Type:</b> movie</p>
                        <p><b>Year:</b> 0000</p>
                    <p><b>Cover Art:</b> <a href="https://website.website" target="_blank">website.website</a></p>
                </div>
            </div>` 
        )
        .join("");
}

main();